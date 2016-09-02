//app.js is our entry file, our jumping off point
"use strict";

//******************************************************************//
// ngRoute is the name of the module inside the angular.min.js file
// the same way that "TodoApp" is the name of the module in the app.js
//******************************************************************//
var app = angular.module("TodoApp", ["ngRoute"])
    .constant("FirebaseURL", "https://todoapp-5a055.firebaseio.com/");//definig a variable called Firebase with a value of a specific URL

app.config(function($routeProvider){
    $routeProvider
        .when("/items/list", {
            templateUrl: "partials/item-list.html",//templateUrl - the U is big, the rl are not!
            controller: "ItemListCtrl"
        })
        .when("/items/new", {
            templateUrl: "partials/item-form.html",
            controller: "ItemNewCtrl"
        })
        .when("/items/view/:itemId", {
            templateUrl: "partials/item-details.html",
            controller: "ItemViewCtrl"
        //itemId is a placeholder for any ID. after item/: -
        //anything after colon will be saved in a variable called itemId
        })
        .when("/items/edit/:itemId", {
            templateUrl: "partials/item-form-edit.html",
            controller: "ItemEditCtrl"
        })
        .otherwise("/items/list");  //if user tries to reroute to somewhere else,
        //it sends them back to list

});