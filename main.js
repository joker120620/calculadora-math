const display= document.querySelector("#display");
const valor= document.querySelectorAll(".valor");
const operador= document.querySelector("#operador");
const suma =document.getElementById("suma");
const resta =document.getElementById("resta");
const multi =document.getElementById("multi");
const division =document.getElementById("division");
const igual =document.getElementById("igual");
const borrar =document.getElementById("borrar");

igual.addEventListener("click",()=>{
    let a=+valor[0].value;
    let b=+valor[1].value;
    if(operador.textContent==="+"){
        display.innerText= b+a;
        valor[1].value=valor[0].value;
        valor[0].value="";
    }else if(operador.textContent==="-"){
        display.innerText= b-a;
        valor[1].value=valor[0].value;
        valor[0].value="";
    }else if(operador.textContent==="*"){
        display.innerText= b*a;
        valor[1].value=valor[0].value;
        valor[0].value="";
    }else if(operador.textContent==="/"){
        display.innerText= b/a;
        valor[1].value=valor[0].value;
        valor[0].value="";
    }
});

suma.addEventListener("click",()=>{
    operador.textContent= "+";
})
resta.addEventListener("click",()=>{
    operador.textContent= "-";
})
multi.addEventListener("click",()=>{
    operador.textContent= "*";
})
division.addEventListener("click",()=>{
    operador.textContent= "/";
})
borrar.addEventListener("click",()=>{
    operador.textContent= "";
    display.innerText= "";
    valor[0]="";
    valor[1]="";
});