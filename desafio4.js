

let nombre = "Jabes";
console.log(`¡Hola, ${nombre}!`);
alert(`¡Hola, ${nombre}!`);

let lenguaje = prompt("¿Cual es tu lenguaje de programacion favorito?");

console.log(lenguaje);

let valor1 = 777;

let valor2 = 999;

let resultadoSuma = valor1 + valor2;
let resultadoResta = valor1 - valor2;

console.log(`la suma de ${valor1} + ${valor2} = ${resultadoSuma}`);
console.log(`la diferencia de ${valor1} - ${valor2} = ${resultadoResta}`);


let edad = parseInt(prompt("¿Cual es tu edad?"));

if(edad >= 18){
    console.log("Eres mayor de edad");
} else{
    console.log("Eres menor de edad");
}


let numero = parseInt(prompt("Dame un numero"));

if(numero == 0){
    console.log("El numero es Cero");
} else if(numero > 0){
    console.log("El numero es positivo");
} else{
    console.log("El numero es negativo");
}

let numeroo = 1;
while(numeroo <=10 ){
    console.log(`${numeroo++}`);
}

let nota = 8;

if(nota >= 7){
    console.log(`Nota:${nota}, Aprobado`);
} else{
    console.log(`Nota:${nota}, Reprobado`);
}

console.log(`Un numero random ${Math.random()}`);

console.log(`Un numero random entre [1 - 10] ${Math.floor(Math.random()*10)+1}`);
console.log(`Un numero random entre [1 - 1000] ${Math.floor(Math.random()*1000)+1}`);
