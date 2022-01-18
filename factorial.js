//12 factorial of a number
let r = 5
if(r<0){
    console.log('error')
}
else if(r===0){
    console.log(`the number ${r} factorial is 1`)
}
else if(r>0){
    fact =1;
    for(var i=1;i<=r;i++){
        var result=fact*=i
    }

}
console.log(result)