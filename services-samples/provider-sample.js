
var app = angular.module("App", []);
app.controller("EmpController", ['$scope', 'calcService', function ($scope, calcService) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.doSum = function () {
        // $scope.sumOfNumbers = calcService.getSum($scope.a, $scope.b);
        calcService.getSum($scope.a, $scope.b, function(result){
            $scope.sumOfNumbers = result;
        });
    };
}]);
app.provider('calcService', function () {
    var baseUrl = '';
    this.config = function(url){
        baseUrl = url;
    }
    this.$get = ['$log', '$http',function($log,$http){
        $log.log("Instantiating provider");
        var oCalcService = {};
        // oCalcService.getSum = function (a, b) {
        //     return parseInt(a) + parseInt(b);
        // };
        oCalcService.getSum = function(a,b,callback){
            $http({
                url: baseUrl + 'sum?a=' + a +'&b=' + b,
                method:'GET'
            }).then(function(resp){
                $log.log("In Succeess Callback");
                var s = parseInt(a) + parseInt(b);
                callback(s);
            },function(resp){
                $log.error("Error Occured");
            })            
        }
        return oCalcService;
    }
    ]});

app.config(['calcServiceProvider', function (calcServiceProvider) {
    calcServiceProvider.config("http://localhost:5800/");
}]);