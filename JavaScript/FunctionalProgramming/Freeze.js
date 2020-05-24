const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 
// console.log(arr)

//          Object.freeze() gives our array/object immutability
const arr2 = Object.freeze([1,2,3,4]);
arr.push(300); //can no longer change the array. 
// console.log(arr2)

const groceryList = Object.freeze([
    {"item": "carrots",                "haveIngredient":false},
    {"item": "onions",                 "haveIngredient":true},
    {"item": "celery",                 "haveIngredient":false},
    {"item": "cremini mushrooms",      "haveIngredient":false},
    {"item": "butter",                 "haveIngredient":true}
]);
//      Because groceryList is immutable, we create a clone of the groceryList array
// by use of spread opperator and then add the item we want.
const needThyme = [...groceryList, {"item": "thyme", "haveIngredient": false}];

// const needThyme = groceryList.concat([ {"item": "thyme", "haveIngredient": false}]);

const gotTheThyme = [...needThyme.slice(0, 5), {...needThyme[5], "haveIngredient": true}];

const notCelery = [...gotTheThyme.slice(0,2), ...gotTheThyme.slice(3)];

// console.log(needThyme);
// console.log(gotTheThyme);
// console.log(notCelery);


const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); //this will throw an error
const sortedItems = [...items].sort();
// console.log(sortedItems);

//     .sort() converts values to strings before sorting. 
//      Therefore this will not give us the output we are expecting when sorting numbers
const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
// this will return [10, 12, 22, 3, 5, 8 ]


const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );
console.log(sortedGroceries);
