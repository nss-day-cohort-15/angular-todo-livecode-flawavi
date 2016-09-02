"use strict";

app.controller("ItemViewCtrl", function($scope, ItemStorage, $routeParams) {
  //$routeParams allows us to peek into URL bar and grab whatever is there and tell us where we are
  //we will use it to grab the ID that's in the URL
  $scope.items = [];
  ItemStorage.getItemList().then((itemCollectionArr)=>{
    $scope.items = itemCollectionArr;

    $scope.selectedItem = $scope.items.filter(function(item){
      return item.id === $routeParams.itemId;
      //here is where itemId in app.js is connected to the itemId via $routeParams
    })[0];
  });
});