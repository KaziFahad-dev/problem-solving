

function smallestNumber(array){
    let smallest = array[0];
    for(let i = 1; i < array.length; i ++){
        const currentNumber = array[i];
        // console.log(currentNumber);
        if(currentNumber < smallest){
            smallest = currentNumber;
        }
    }
    return smallest;
}


console.log(smallestNumber([1,2,3,4,5,6,7,8,9,10,112,149,1000, 12348]));