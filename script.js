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


//Various Operators for Calculator
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

