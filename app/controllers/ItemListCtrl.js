"use strict";

//this functions sole purpose is to acquire data from a factory, specifically ItemFactory.js
app.controller("ItemListCtrl", function ($scope, ItemStorage, SearchTermData) {
  $scope.searchText = SearchTermData;
//this is the same as var ItemStorage = require("ItemFactory")
  ItemStorage.getItemList()
  .then((itemCollectionArr) => {
    console.log(itemCollectionArr, "itemCollectionArr");
    $scope.items = itemCollectionArr;
  });

  $scope.itemDelete = (itemId) => {
    ItemStorage.deleteItem(itemId)
    .then((response) => {
      ItemStorage.getItemList()
      .then((itemCollectionArr) => {
        $scope.items = itemCollectionArr;
      });
    });
  };

});