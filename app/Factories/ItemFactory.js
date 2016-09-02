"use strict";
//this is where the interaction with the data occurs.
//promises and ajax calls using angular libraries; $q is promises library
app.factory("ItemStorage", ($q, $http, FirebaseURL, $location) => {

  let getItemList = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/items.json`)
      .success((itemObject)=>{
        if (itemObject !== null){
          Object.keys(itemObject).forEach((key) => {
            itemObject[key].id = key;
            items.push(itemObject[key]);
          });
          resolve(items);
        } else {
          console.log(items, "items");
          resolve(items);
        }
      })
      .error((error) => {
        reject(error);
      });//.success does parsing for us
    });
  };

  let postNewItem = (newItem) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseURL}/items.json`,
      JSON.stringify(newItem))
      .success((objFromFirebase) => {
        resolve(objFromFirebase);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let deleteItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success((objFromFirebase) => {
        resolve(objFromFirebase);
      });
    });
  };

  let putItem = (itemId, updatedItem) => {
    return $q((resolve, reject)=>{
      $http.put(`${FirebaseURL}/items/${itemId}.json`,
      JSON.stringify(updatedItem))
      .success((objFromFirebase) => {
      $location.path("/items/list");
        resolve(objFromFirebase);
      });
    });
  };

  let getSingleItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/items/${itemId}.json`)
      .success((singleObjFromFirebase) => {
        resolve(singleObjFromFirebase);
      });
    });
  };


  return {
    getItemList,
    postNewItem,
    deleteItem,
    putItem,
    getSingleItem
  };
});