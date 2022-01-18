//14 prime number program 

var num = prompt('enter the number')


 var count = 0;
 if(num === 1){
    console.log(`${num} is not a prime but it is a composite number`)

 }
 

 for(var i=2;i<num/2;i++){
    
     if(num%i == 0){
         count++
         break
     }
 }
 if(count>0){
     console.log(`${num} is not a prime`)
 }
 else{
    console.log(`${num} is  a prime`)
 }
