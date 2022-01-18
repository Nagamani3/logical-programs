var sum = 0;
var num = prompt("enter the three didgit integer")
temp = num;
while(temp >0){
    let remainder = temp%10;
    sum = sum+remainder*remainder*remainder;
    temp = parseInt(temp/10)

}
if(sum==num){
    console.log(`${num} is a armstrong number`)
}
else{
    console.log(`${num} is a not armstrong number`)
}