// 1.in array find out second highest number





function name(arr) {
    var max = Math.max.apply(null , arr)//first largest number
    arr.splice(arr.indexOf(max),1)//removing first largest number
    return Math.max.apply(null,arr)//returning second largest number
    
}
var array = [1,3,75,748,930929]
console.log(name(array))

//2.without using builtin methods

function seclarge(arr) {
    for(var j=1 ;j<arr.length;j++){
        if(arr[j-1] !== arr[j]){
            return arr[j]
        }

    }
}
var temp = [45,67,89,4,7,6]
console.log(seclarge(temp));