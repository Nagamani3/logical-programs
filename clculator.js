var operator = prompt("enter +,-,*,/,% operator")
var number1 = parseFloat(prompt("enter the first number"));
var number2 = parseFloat(prompt("enter the second number"));
let result;

if(operator === '+')
{
     result = number1 + number2;
}

 else if(operator === '-')
{
     result = number1 - number2;
}
 else if(operator === '*')
{
    result = number1 * number2;
}
 else if(operator === '/')
{
     result = number1 / number2;
}
else 
{
     result = number1 % number2;
}


console.log(`${number1} ${operator} ${number2} = ${result}`)