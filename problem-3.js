function numberFactorial(number){
    let factorial = 1;
    for(let i = number; i >0 ; i --){
        // console.log(i)
        factorial = factorial * i;
    }
    return factorial;   
}



// console.log(numberFactorial(5))


function getFactorial(number){
    let factorial = 1;
    for (let i = 1; i <= number; i ++){
        // console.log(i)
        factorial = factorial * i;

    }
    return factorial
}

// console.log(getFactorial(100));

