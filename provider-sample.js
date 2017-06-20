
var app = angular.module("App", [])
    .controller("EmpController", ['$scope', 'calcService', function ($scope, calcService) {
        $scope.a = 10;
        $scope.b = 20;
        $scope.doSum = function () {
            $scope.sumOfNumbers = calcService.getSum($scope.a, $scope.b);
            // calcService.getSum($scope.a, $scope.b, function(result){
            //     $scope.sumOfNumbers = result;
            // });
        };
    }]);
app.provider('calcService', function () {
    $log.log("Instantiating the service");
    this.$get = function () {
        var ocalcService = {};
        ocalcService.getSum = function (a, b) {
            return parseInt(a) + parseInt(b);
        }
        return ocalcService;
    }
});

app.config(['calServiceProvider', function (calServiceProvider) {

}]);