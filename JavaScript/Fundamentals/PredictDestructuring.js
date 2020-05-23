const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'iShotTheSherrif',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 14739479220
};
//      Addresses no longer created.
// const { addresses: [whiteHouse, sherlock] } = person;
// console.log(addresses);

// const { addresses: [, {city: london}] } = person;
// console.log(london);

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

//         Way of accessing before ES6
// var email = person.email;
// var firstAnimal = animals[0];


//      Destructuring after ES6
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email);
// console.log(firstAnimal);

//      Before ES6
// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

//      After ES6
// const { email, password } = person;
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;
// console.log(email, password);
// console.log(firstAnimal, secondAnimal, thirdAnimal)

// const password = '12345';
// : after variable redirects value of password to be held in hashedPassword
// const { password : hashedPassword } = person;
// console.log(password);
// console.log(hashedPassword);






//      Predicting outcomes of Destructuring
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

//will print Tesla and then print Mercedes

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

//will throw ReferenceError because name is no longer defined.

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

//wont compile, scope of password is outside const person. cant assign it to person


// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);
//prints 5, 2
//INCORRECT bool comparrison, first and third both equal 2 so it will be true, second is equal to 5 so it will be a false comparison. 


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//print value, then secondkey array, then 1, and last will print 5


