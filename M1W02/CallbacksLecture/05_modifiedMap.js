const randomArray = [1,2,3,4,5]


const ourOwnModfiedVersionOfMap = (passedInArray, callback) =>{
    const newArray = []
    // [2,4,6]
    // for(const element of array){
    //     // newArray.push(element * 2);
    //     newArray.push(callback(element));
    //     // newArray.push(multiplyByTwo(3));
    //     // newArray.push(6);
    // }
    passedInArray.forEach((e,i,a)=>newArray.push(callback(e,i,a)))
    for(let i = 0; i < passedInArray.length; i++){
        // if(elementCondition){
            // Executes callback on element
            newArray.push(callback(passedInArray[i], i, passedInArray))
        // }
        // if(indexCondition){
        //     // Executes callback on index
        //     newArray.push(callback(i))
        // }
        // if(arrayCondition){
        //     // Executes callback on array
        //     newArray.push(callback(passedInArray))
        // }
    }

    return newArray;
}

console.log(ourOwnModfiedVersionOfMap(randomArray, (element,index,array)=>array))