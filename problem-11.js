

function sumAndAverage(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i ++){
        // console.log(arr[i]);
        sum = sum + arr[i];
        // console.log(sum);
    }
    let average = sum / arr.length;
    return { average };
}



const inputArray = [1,2,3,4,5,6,67,7,76];
let result = sumAndAverage(inputArray);
console.log(result);
