var app = angular.module("App",[])
.controller("EmpController", ['$scope', '$http', '$log', function($scope,$http, $log){
    $scope.a=10;
    $scope.b=20;

    $scope.doDoubleandSum = function(){
        $scope.a=$scope.a * 2;
        $scope.b=$scope.b * 2;
        $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    };

    $scope.doSum = function(){
        //  $scope.sumOfNumbers = parseInt($scope.a) + parseInt($scope.b);
        $http({
            url:'http://localhost:5800/sum?a='+ $scope.a + '&b=' + $scope.b,
            method:'GET'
        }).then(function(resp){
              $log.log(resp.data);
            $scope.sumOfNumbers = resp.data;
          
        }, function(resp){
            $log.error("Error Occurred");
        });
    }
}]);