var nomeCompleto = "Adriano Leal de Souza";

console.log(nomeCompleto);


let numeroA = 10;
let numeroB = 20;
let resultado = numeroA * numeroB

console.log(resultado)


function saudacao (){
    console.log("Oi, eu sou o Goku!")
}

saudacao();


function multiplica (a, b) {

    let resultado = a * b
    console.log(resultado)
};
multiplica (15, 3)


function podeDirigir (idade){
    
    if (idade >= 18) { 
    console.log("Você pode dirigir")
    } 
    else {idade < 18 
    console.log("Você não pode dirigir")
}
};
podeDirigir (40)


for (let i = 0; i < 21; i++) {
    console.log(i)
};


for (let i = 0; i < 21; i++) {
    if (i % 2 != 0) {
    console.log(i)
}
};


function tabuada (valor){
    for (i = 1; i <= 10; i++) 
    console.log ( valor + " x " + i + " = " + (valor * i))
}
tabuada(9)


function converterEmHoras (minutos) {
    const horas = Math.floor(minutos/ 60);          
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    return `${textoHoras }:${textoMinutos}` + " " + "hs"
    };
    console.log(converterEmHoras(482));









    
    

