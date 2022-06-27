const addition=function(num1,num2)
{
   let sum= num1+num2;
   let resultDisplay=document.querySelector(".display");
   resultDisplay.textContent=sum;
}

const subtraction=function(num1,num2)
{
    let difference= num1-num2;
    let resultDisplay=document.querySelector(".display");
    resultDisplay.textContent=difference;
}

const multiplication=function(num1,num2)
{
    let product= num1*num2;
    let resultDisplay=document.querySelector(".display");
    resultDisplay.textContent=product;
}

const division=function(num1,num2)
{
    let divide= num1/num2;
    if(divide=="Infinity")
    {
        return alert("ERROR!CANNOT DIVIDE BY ZERO");
    }
    let resultDisplay=document.querySelector(".display");
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


let num1=0;
let num2=0;
let tempNum1Array=[];
let tempNum2Array=[];
let savedValue=0;
let operator="";
let tempOperatorArray=[];

function processCalculator()
{
    const getCalculatorClicked=function()
    {
        const btns=document.querySelectorAll('.btn');
        btns.forEach((button)=>{
            button.addEventListener('click',()=>{
                savedValue=button.innerHTML;
                const resultDisplay=document.querySelector('.display');

                if(operator=="")
                {
                    tempNum1Array.push(savedValue);
                    num1=tempNum1Array.join("");
                    resultDisplay.textContent=num1;
                }
                else{
                    tempNum2Array.push(savedValue);
                    num2=tempNum2Array.join("");
                    resultDisplay.textContent=num2;
                }
            })
        })
    }

    const getCalculatorOperatorSelection=function()
    {
        const btns=document.querySelectorAll('.btn');
        btns.forEach((button)=>{
            button.addEventListener('click',()=>{
                operator=button.innerHTML;
                tempOperatorArray.push(operator);


            })
        })

    }

    const calculation=function()
    {
        const equalBtn=document.querySelector('#equals');
        equalBtn.addEventListener('click',()=>{
            const calcDisplay = document.querySelector(".display");
                num1 = parseInt(num1);
                num2 = parseInt(num2);
                operate(operator, num1, num2);
        })
    }
    // DOM for "Clear" button
    const clearButton = document.querySelector(".clear");
        clearButton.addEventListener('click', () => { location.reload(); })
    
    getCalculatorClicked();
    getCalculatorOperatorSelection();
    calculation();
}
processCalculator();