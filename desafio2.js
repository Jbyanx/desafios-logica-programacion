//Dia de la semana
let diaSemana = prompt("¿Que dia de la semana es?");

if( diaSemana.toLowerCase == "sabado" || diaSemana.toLowerCase == "domingo" ){
    alert("¡Buen fin de semana!");
} else{
    alert("¡Buena semana!");
}

// Numero positio o Negativo
let numero = prompt("Ingrese un numero acontinuacion");

if(numero > 0 ){
    alert("El numero es positivo");
} else if(numero == 0){
    alert("El numero es cero");
} else{
    alert("El numero es negativo");
}

//Puntuacion de un juego
let puntuacion = prompt("¿Cual fue tu puntuacion?");

if( puntuacion == 100){
    alert("¡Felicidades, has ganado!");
} else{
    alert("Intentalo nuevamente para ganar.");
}

// mostrar saldo con String template
let nombre = prompt("¿Cual es tu Nombre?");
let saldo = prompt("¿Cual es tu saldo?");

alert(`Hola ${nombre}, tu saldo es: $${saldo}`);

//bienvenido
let nombrre = prompt("¿Cual es tu Nombre?");
alert(`Bienvenido ${nombrre}`)
