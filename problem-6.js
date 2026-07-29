

function countVowels(str){
    const vowels = 'aeiou';
    let count = 0;
    for(let i = 0; i < str.length; i ++){
        let letter = str[i];
        if(vowels.includes(letter)){
            count ++;
        }
    }
    return count;
}



const inputString = 'Hello, how many vowels are in this sentence?';
console.log('The number of vowels in the string is ' + countVowels(inputString));