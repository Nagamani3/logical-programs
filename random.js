// 13 get random item from array

var arr=['ma','pa','we',4,7,"A"]

function getrandom(array){
    var res = Math.floor(Math.random()*array.length);
    var item = array[res]
    return item
}
console.log(getrandom(arr))