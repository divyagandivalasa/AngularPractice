var app = angular.module("App",[])
.controller("EmpController", ['$scope', function($scope){
    $scope.a=10;
    $scope.b=20;

    $scope.doDoubleandSum = function(){
        $scope.a=$scope.a * 2;
        $scope.b=$scope.b * 2;
        $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    };

    $scope.doSum = function(){
         $scope.sumOfNumbers = parseInt($scope.a) + parseInt($scope.b);
    }
}]);