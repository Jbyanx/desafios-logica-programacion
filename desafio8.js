/**
 * Crea una lista vacía llamada "listaGenerica".
 * Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
 * Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
 * Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
 * Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
 * Crea una función que calcule el promedio de los elementos en una lista de números.
 * Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
 * Crea una función que devuelva la suma de todos los elementos en una lista.
 * Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
 * Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
 * Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */

let listaGenerica = [];

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('Golang');
console.log(lenguagesDeProgramacion);

function mostrarLista(lista) {
    console.log(lista);
}

function mostrarListaInversa(lista) {
    console.log(lista.reverse());
}

function promedio(listaNumeros) {
    let sum = 0;
    for (let index = 0; index < listaNumeros.length; index++) {
        sum += listaNumeros[index];
    }
    return (sum / listaNumeros.length).toFixed(2);
}

function numGrandeYPequeno(lista){
    let grande = lista[0];
    let pequeno = lista[0];

    for (let i = 0; i < lista.length; i++) {
        pequeno = Math.min(pequeno, lista[i]);
        grande = Math.max(grande, lista[i]);
    }

    console.log(`El numero mas grande de la lista es ${grande} y el mas pequeño es ${pequeno}`);
}

function sumaElementos(lista){
    let sum = 0;
    for (let i = 0; i < lista.length; i++) {
        sum += lista[i];
    }
    return sum;
}

function posicionDelnumero(numero, lista) {
    for (let index = 0; index < lista.length; index++) {
        if(lista[index] == numero){
            return index;
        }
        
    }
    return -1;
}

function sumaDeListas(lista1, lista2){
    let listaAux =[];
    if(lista1.length != lista2.length){
        return new Error("Las listas deben ser del mismo tamaño");
    }else{
        for (let i = 0; i < lista1.length; i++) {
            listaAux[i] = lista1[i] + lista2[i];
        }
    }
    return listaAux;
}

function elevarAlCuadrado(lista){
    let listaAux = [];
    for (let i = 0; i < lista.length; i++) {
        listaAux[i] = Math.pow(lista[i], 2);
    }
    return listaAux;
}
