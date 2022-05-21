const segundo = 1000;
const minuto = 60* parseInt(segundo);
const hora = 60* parseInt(minuto);
const dia = 24* parseInt(hora);
let total ;
let finalData;
let idContador;

function start (){

    const date = document.querySelector("input").value;

    finalData = new Date(date).getTime();
    idContador = setInterval(contador, 1000);
    
} 

function contador(){
    let now = new Date().getTime();
    total = finalData - now;
    const dias = Math.floor(total / dia);
    const horas = Math.floor((total%dia)/hora) + 3;
    const minutos = Math.floor((total%hora)/minuto);
    const segundos = Math.floor((total%minuto)/segundo);
    
    console.log(dias, horas, minutos, segundos);
    
    document.querySelector("h1").innerHTML = ` faltam: ${dias} d ${horas} h ${minutos} m ${segundos}s`;
    
    
}
function reset (){
    document.querySelector("h1").innerHTML = "";
    clearInterval(idContador);
}