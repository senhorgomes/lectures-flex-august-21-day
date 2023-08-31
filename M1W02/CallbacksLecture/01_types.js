//What types of functions exist?
// Anonymous functions
// Function definition
//Hoisted
function someRandomAnonymousFunction(){
    console.log("I am a random function!")
}

//Invoking

// someRandomAnonymousFunction()


//Referencing
// someRandomAnonymousFunction

// Function expressions

const someDefinedFunction = function(){
    console.log("I am ")
}

// Arrow functions

const someRandomAnonymousArrowFunction = () =>{
    return "I am a random function!"
}
///Implicit return
// const someRandomAnonymousArrowFunction = () => "I am a random function!"
//console.log("I am a random function!")
console.log(someRandomAnonymousArrowFunction())


const objectMethod = {
    name: "Bryan",
    whatIsMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}

// objectMethod.whatIsMyName()

// Best practices
// Arrow functions for declared functions (const)
// For object methods, its best to use anonymous functions