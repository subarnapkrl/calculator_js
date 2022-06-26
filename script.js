const addition=function(num1,num2)
{
   let sum= num1+num2;
   let resultDisplay=document.querySelector("#display");
   resultDisplay.textContent=sum;
}

const subtraction=function(num1,num2)
{
    let difference= num1-num2;
    let resultDisplay=document.querySelector("#display");
    resultDisplay.textContent=difference;
}

const multiplication=function(num1,num2)
{
    let product= num1*num2;
    let resultDisplay=document.querySelector("#display");
    resultDisplay.textContent=product;
}

const division=function(num1,num2)
{
    let divide= num1/num2;
    if(divide=="Infinity")
    {
        return alert("ERROR!CANNOT DIVIDE BY ZERO");
    }
    let resultDisplay=document.querySelector("#display");
    resultDisplay.textContent=divide;
}


//Various Operators for Calculator
const operate=function(operator,number1,number2)
{
    if(operator=="+")
    {
         addition(number1,number2);
    }
    else if(operator=="-")
    {
         subtraction(number1,number2);
    }
    else if(operator=="*")
    {
         multiplication(number1,number2);
    }
    else if(operator=="/")
    {
        division(number1,number2);
    }
    else{
         console.log("Invalid Operator!");
    }
}



