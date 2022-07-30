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

numberBtn();