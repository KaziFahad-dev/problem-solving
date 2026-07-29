
function reversedString(str){
    let reversedWord = '';
    for(let i = str.length - 1; i >= 0 ; i --){
        let letter = str[i];
        reversedWord = reversedWord + letter;
        
    }
    console.log(reversedWord);
    
    
}


reversedString('Programming')