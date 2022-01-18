//10 check palindrome  or not and reverse it 

function palindrome (str){
    var result = str.split("").reverse().join("");
    console.log(result)
    if(result === str){
        return (`${str} is a palindrome`)
    }
    else{
        return (`${str} is a not  palindrome`)
    }
}
console.log(palindrome("malayalam"))