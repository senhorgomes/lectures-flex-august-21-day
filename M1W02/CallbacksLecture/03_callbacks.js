// A parameter is essentially a function within a function

//Calculator
//Takes in two values and sums them up
// calc(2,2,addition) => 4
// calc(2,2,subtraction) => 0
// More operators? * / -

const addition = (x,y) => {
    return x + y;
}
const subtraction = (x,y) => {
    return x - y;
}
const division = (x,y) => {
    return x / y;
}
const multiplication = (x,y) => {
    return x * y;
}

const calc = (number1, number2, callback) => {

    // return callback(number1, number2);
    // return addition(10, 5);
    // return 10;


    // return number1 + number2;
    // if(operator === "addition"){
    //     return  addition(number1,number2)
    // }
    // if(operator === "subtraction"){
    //     return number1 - number2;
    // }
    // if(operator === "division"){
    //     return number1 / number2;
    // }
    // if(operator === "multiplication"){
    //     return number1 * number2;
    // }
}
// We should only pass in the reference of the function, be careful not to invoke the function
console.log(calc(10,5,addition))

//Higher order function
////Is a function that takes in a function as a parameter

// console.log(calc(10,5,addition(10,5)))
const decryptionSoftware = require('')


const loginFunction = (email, password) => {
    for(let user in users){
        if(user.email === email){
            // Check for the password
            if(decryptionSoftware(user.password) === password){
                //Reroute user to home page
            }
        }
    }
}

