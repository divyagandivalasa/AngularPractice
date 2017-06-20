var app = angular.module("App",[])
.controller("EmpController", ['$scope', 'calcService', function($scope, calcService){
    $scope.a=10;
    $scope.b=20;
    $scope.doSum = function(){
        //   $scope.sumOfNumbers = calcService.getSum($scope.a, $scope.b);
        calcService.getSum($scope.a, $scope.b, function(result){
            $scope.sumOfNumbers = result;
        });
    };
}]);
app.service('calcService',['$http','$log', function($http,$log){
    $log.log("Instantiating the service");
    // this.getSum = function(a,b){
    //     return parseInt(a)+parseInt(b);
    // }

    // this.getSum = function(a,b, callback){
    //     var s = parseInt(a)+parseInt(b);
    //     callback(s);
    // }
    this.getSum = function(a,b,callback){
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
}]);