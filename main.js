const segundo = 1000;
const minuto = 60* parseInt(segundo);
const hora = 60* parseInt(minuto);
const dia = 24* parseInt(hora);


function start (){

    const date = document.querySelector("input").value;

    let finalData = new Date(date).getTime();
    let now = new Date().getTime();
    let total = finalData - now;

    let dias = Math.floor(total / dia);
    let horas = Math.floor((total%dia)/hora) + 3;
    let minutos = Math.floor((total%hora)/minuto);
    let segundos = Math.floor((total%minuto)/segundo);

    console.log(dias, horas, minutos, segundos);

    document.querySelector("h1").innerHTML = ` faltam: ${dias} d ${horas} h ${minutos} m ${segundos}s`;
    
} 

function reset (){
    document.querySelector("h1").innerHTML = "";
}