/*
            From MDN Docs
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
*/


// let canAfford = (itemPrice, accountBalance) => {
//     if(itemPrice > accountBalance){
//         return `Cannot afford! you are $${itemPrice - accountBalance} short`;
//     }
//     else{
//         return "Can afford";
//     }
// };

let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
    //Is itemPrice > accountBalnce
    //yes? return "cannot afford"
    ? `Cannot afford! you are $${itemPrice - accountBalance} short`
    //no, then return can afford
    : "can afford";
}

// console.log(canAfford(12, 11))
let myBankAccountBalance = 1000;
const drone = 1001;
let droneOnSale = drone - drone * 0.03;
console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));