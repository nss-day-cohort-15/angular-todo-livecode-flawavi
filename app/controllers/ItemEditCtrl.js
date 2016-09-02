"use strict";

app.controller("ItemEditCtrl", function($scope, ItemStorage, $location, $routeParams) {

    $scope.editTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: "normal"
  };

    $scope.itemEdit = function(){
    ItemStorage.getSingleItem($routeParams.itemId)
    .then(function(data) {
      $scope.editTask = data;
      //use locatino to pass in route back to items list
    });
  };

  $scope.updateItem = function(){
    ItemStorage.putItem($routeParams.itemId, $scope.editTask);
  };

  $scope.itemEdit();

});
