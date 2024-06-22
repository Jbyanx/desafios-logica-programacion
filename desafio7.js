/* 
Crea una función que calcule el índice de masa corporal (IMC) de una persona
 a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros
 */
function imc(altura, peso){
    return `Si tu ltura es ${altura}m y tu peso es ${peso}kg, tu IMC es: ${peso/Math.pow(altura,2)}`;
}

/**
 * Crea una función que calcule el valor del factorial de un número pasado como parámetro.
 */

function factorial(numero){
    if(numero < 0){
        return "Digitar un numero positivo";
    }else if(n==0){
        return 1;
    } else{
        let fact = 1;
        for (let i = 1; i <= numero; i++) {
            fact*=i;
            return fact;       
        }
    }
}

/**
 * Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en 
 * reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
 * Para esto, considera la cotización del dólar igual a R$4,80.
 */

function convertirUSDtoRS(usd){
    return `${usd}USD son : ${ (usd * 4.80).toFixed(2)}`;
}

/**
 * Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
 * utilizando la altura y la anchura que se proporcionarán como parámetros.
 */
function areaYPerimetroRectangulo(altura, anchura){
    return `EL area de la sala es ${altura * anchura}m y el perimetro es ${altura+altura+anchura+anchura}`;
}

/**
 * Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
 * utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
 */
function areaYPerimetroCirculo(radio){
    let area = (Math.PI * Math.pow(radio,2));
    let perimetro = 2 * Math.PI * radio;
    return `EL area de la sala es ${area}m^2 y el perimetro es ${perimetro}`;
}

/**
 * Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
 */

function tablaDeMultiplicar(numero){
    for (let i = 0; i <= 12; i++) {
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}
