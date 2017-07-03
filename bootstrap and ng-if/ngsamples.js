var app = angular.module("App",[])
.controller("EmpController", ['$scope', 'empDetailsService', function($scope, empDetailsService){
    $scope.a=10;
    $scope.b=20;
    $scope.getEmployees = function(){
        empDetailsService.getEmployeeDetails(function(result){
            $scope.Employees = result;
        });
    };
    $scope.getEmployee = function(id){
        debugger;
        empDetailsService.getEmployee(id, function(result){
            $scope.Employee = result;
        });
    };
}]);
app.service('empDetailsService',['$http','$log', function($http,$log){
    $log.log("Instantiating the service");
    this.getEmployeeDetails = function(callback){
        $http({
            url:'http://localhost:5800/employees',
            method:'GET'
        }).then(function(resp){
            $log.log("In Success Callback");
            $log.log(resp.data);
            callback(resp.data);
        },function(response){
            $log.error("Error Occured");
        })
    };

    this.getEmployee = function(id,callback){
        $log.log("In get Employee")
        $http({
            url:'http://localhost:5800/emp/'+id,
            method:'GET'
        }).then(function(resp){
            $log.log("In Success Callback");
            $log.log(resp.data[0]);
            callback(resp.data[0]);
        },function(response){
            $log.error("Error Occured");
        })
    };
}]);