const addition=function(num1,num2)
{
   return num1+num2;
}

const subtraction=function(num1,num2)
{
    return num1-num2;
}

const multiplication=function(num1,num2)
{
    return num1*num2;
}

const division=function(num1,num2)
{
    return num1/num2;
}

// console.log(addition(121,11));
// console.log(subtraction(121,11));
// console.log(multiplication(121,11));
// console.log(division(121,11));

const operate=function(operator,number1,number2)
{
    if(operator=="+")
    {
        return addition(number1,number2);
    }
    else if(operator=="-")
    {
        return subtraction(number1,number2);
    }
    else if(operator=="*")
    {
        return multiplication(number1,number2);
    }
    else if(operator=="/")
    {
        return division(number1,number2);
    }
    else{
        return console.log("Invalid Operator!");
    }
}

console.log(operate("*",10,20));