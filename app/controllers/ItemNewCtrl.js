"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location){
  //need object to pass to factory for saving to firebase
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: "normal"
  };

  //function to interact with form in view, then pass along to factory
  $scope.addNewItem = function(){
    ItemStorage.postNewItem($scope.newTask)
    .then(function() {
      //use locatino to pass in route back to items list
      $location.url("/items/list");
    });
  };



});