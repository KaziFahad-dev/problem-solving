

function largestNumber(array){
    let largest = array[0];
    for(let i = 1; i < array.length; i ++){
        const currentNumber = array[i];
        // console.log(currentNumber);
        if(currentNumber > largest){
            largest = currentNumber;
        }
    }
    return largest;
}


console.log(largestNumber([1,2,3,4,5,6,7,8,9,10,112,149,1000, 12348]));