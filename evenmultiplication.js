//8. multiply by 2 in even places of array

arr=[1,2,3,4,5,6]
var result = arr.filter(x=>{
    if(x%2 ==0){
        return x
    }
}).map(y=>
    y*2
)
console.log(result)