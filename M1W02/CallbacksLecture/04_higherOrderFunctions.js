//What is a HigherOrder function?
// A function that takes in another function as a parameter
// Math.floor()
// Array.map => Takes in a callback, and it executes for each element in the array, then it returns a new array with the modified elements

const randomArray = [1,2,3,4,5]
const anotherRandomArray = [4,2,12,4,568]

// const mappedArray = randomArray.map((e,i,a)=>{
    const multiplyByTwo = (number) => {
        return number * 2;
    }
const mappedArray = randomArray.map(function(element, index, array){return multiplyByTwo(element)})
// const mappedArray = randomArray.map((element, index, array)=>{
//     return array;
// })
console.log(mappedArray)



const justReturns = (item) => {
    return item
}
// console.log(ourOwnVersionOfMap(randomArray, justReturns, false, true))
// console.log(ourOwnVersionOfMap(randomArray, justReturns, false, false, true))
const ourOwnVersionOfMap = (passedInArray, callback, elementCondition, indexCondition, arrayCondition) =>{
    const newArray = []
    // [2,4,6]
    // for(const element of array){
    //     // newArray.push(element * 2);
    //     newArray.push(callback(element));
    //     // newArray.push(multiplyByTwo(3));
    //     // newArray.push(6);
    // }
    for(let i = 0; i < passedInArray.length; i++){
        if(elementCondition){
            // Executes callback on element
            newArray.push(callback(passedInArray[i]))
        }
        if(indexCondition){
            // Executes callback on index
            newArray.push(callback(i))
        }
        if(arrayCondition){
            // Executes callback on array
            newArray.push(callback(passedInArray))
        }
    }

    return newArray;
}
// for(const element of randomArray){
//    return element * 2;
// }

// console.log(ourOwnVersionOfMap(randomArray, justReturns, true))
// console.log(ourOwnVersionOfMap(randomArray, justReturns, false, true))
// console.log(ourOwnVersionOfMap(randomArray, justReturns, false, false, true))

// Array.filter