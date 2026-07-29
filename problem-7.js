
function isPalindrome(str){
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i --){
        let letter = str[i];
        reversedStr = reversedStr + letter;
    }
    // console.log(reversedStr);
    if(str === reversedStr){
        return 'Palindrome';
    }
    else{
        return 'Not Palindrome';
    }
}



const input = isPalindrome('adfeeo');
console.log(input);