"use strict";


//TodoCtrl controller function
app.controller("TodoCtrl", function($scope, $location){

    //new properties on newTask object are being created in the DOM
    //via ng-model:="newTask.blahblah"
    $scope.newTask = {};
    $scope.newItem = function(){
        $location.url("/items/new");
    };
    $scope.allItem = function(){
        $location.url("/items/list");
    };
    $scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;//makes new tasks' ids equal to their position in the array
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };
});











