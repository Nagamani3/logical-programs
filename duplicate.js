//11 remove duplicate elements from array
var arr=['mani','anu','ashi','mani','anu','shubha']
var result = [...new Set(arr)]
console.log(result)
let chars = ['mani','anu','ashi','mani','anu','shubha'];

let uChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uChars);