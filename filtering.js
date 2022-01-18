//9.filter the names having more than 5 letters in the array

let arr=['shubha','mani','kar','anusha']
var result=arr.filter(x=>{
    if(x.length>5){
        return x

    }
})
console.log(result)