const numbers=document.querySelectorAll(".number");
const lastValue=document.querySelector(".lastValue");
const currentValue=document.querySelector(".currentValue");
const clearBtn=document.querySelector(".clearBtn");
const deleteBtn=document.querySelector(".deleteBtn");
const operateBtn=document.querySelector(".operator");
const equalBtn=document.querySelector(".equal");

let num1=0;
let num2=0;
let ifTrue=false;


function numberBtn()
{
    numbers.forEach((btn)=>{
        btn.addEventListener("click",function()
        {
            if(currentValue.innerHTML=="0")
            {
                currentValue.innerHTML=btn.innerHTML;
            }
            else{
                currentValue.innerHTML=currentValue.innerHTML+btn.innerHTML;
            }

            if(!(lastValue.innerHTML==" "))
            {
                ifTrue=true;
            }
        })
    })
}


function add(num1, num2) {
    let sum = num1 + num2;
    return (sum);
};

function subtract(num1, num2) {
    let sum = num1 - num2;
    return (sum);
}

function multiply(num1, num2) {
    let sum = num1 * num2;
    return (sum);
}

function divide(num1, num2) {
    let sum = num1 / num2;
    return (sum);
}

function operate(operater, num1, num2) {
    if (operater === "+") {
        return (add(num1, num2));
    } else if (operater === "-") {
        return (subtract(num1, num2));
    } else if (operater === "*") {
        return (multiply(num1, num2));
    } else if (operater === "/") {
        return (divide(num1, num2));
    }
};

numberBtn();