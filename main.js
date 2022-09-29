const display= document.querySelector("#display");
const valor= document.querySelectorAll(".valor");
const operador= document.querySelector("#operador");
const suma =document.getElementById("suma");
const resta =document.getElementById("resta");
const multi =document.getElementById("multi");
const division =document.getElementById("division");
const igual =document.getElementById("igual");
const borrar =document.getElementById("borrar");
let a=+valor[0].value;
let b=+valor[1].value;
let acumular=0
igual.addEventListener("click",()=>{
    b=+display.innerText;
    if(operador.textContent==="+"){
        display.innerText= a+b;
        valor[1].value=valor[0].value;
        valor[0].value="";
    }else if(operador.textContent==="-"){
        display.innerText= a-b;
        valor[1].value=valor[0].value;
        valor[0].value="";
    }else if(operador.textContent==="*"){
        display.innerText= a*b;
        valor[1].value=valor[0].value;
        valor[0].value="";
    }else if(operador.textContent==="/"){
        display.innerText= a/b;
        valor[1].value=valor[0].value;
        valor[0].value="";
    }
});

suma.addEventListener("click",()=>{
    operador.textContent= "+";
    a=+display.innerText;
    acumular=acumular+a;
    display.innerText= "";
})
resta.addEventListener("click",()=>{
    operador.textContent= "-";
    a=+display.innerText;
    acumular=acumular-a;
    display.innerText= "";
})
multi.addEventListener("click",()=>{
    operador.textContent= "*";
    a=+display.innerText;
    acumular=acumular*a;
    display.innerText= "";
})
division.addEventListener("click",()=>{
    operador.textContent= "/";
    a=+display.innerText;
    acumular=acumular/a;
    display.innerText= "";
})
borrar.addEventListener("click",()=>{
    operador.textContent= "";
    display.innerText= "";
    valor[0]="";
    valor[1]="";
});
for(let i=0; i<=9; i++){
    document.getElementById("num"+i).addEventListener("click",presion);
}
function presion(e){
    display.innerText=display.innerText+e.target.value;

}