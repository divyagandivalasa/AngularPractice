var app = angular.module("App",[])
.controller("EmpController", ['$scope', 'calcFactory', function($scope, calcFactory){
    $scope.a=10;
    $scope.b=20;
    $scope.doSum = function(){
        //  $scope.sumOfNumbers = calcFactory.getSum($scope.a, $scope.b);
        calcFactory.getSum($scope.a, $scope.b, function(result){
            $scope.sumOfNumbers = result;
        });
    };
}]);
app.factory('calcFactory',['$http','$log', function($http,$log){
    $log.log("Instantiating the factory");
    var ocalculateService={};
    // ocalculateService.getSum = function(a,b){
    //     return parseInt(a)+parseInt(b);
    // }

    // ocalculateService.getSum = function(a,b, callback){
    //     var s = parseInt(a)+parseInt(b)
    //     callback(s);
    // }

    ocalculateService.getSum = function(a,b,callback){
        $http({
            url:'http://localhost:5800/sum?a=' + a + '&b=' + b,
            method:'GET'
        }).then(function(resp){
            $log.log(resp.data);
            callback(resp.data);
        },function(response){
            $log.error("Error Occured");
        })
    }    
    return ocalculateService;
}]);