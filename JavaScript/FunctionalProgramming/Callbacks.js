// setTimeout( function(){
//     console.log("start")
//     //represents delay in milliseconds (3 seconds);
// }, 3000);

// console.log("end");


var exampleFunction = function(message) {
    console.log(message);
};

// exampleFunction("Hello from exampleFunction")

function parentFunction( callback ) {
    callback( "information from the parent function");
}
//          can also be written as 
// parentFunction( function(message){
//     console.log(message);
// });

parentFunction(exampleFunction);
