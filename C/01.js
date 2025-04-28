console.log("Ejercicio 01:");
console.log("HOLA MUNDO!");
console.log("Puedo mostrar comillas ´simples´");
console.log('Puedo mostrar comillas "dobles"');

console.log("Ejercicio 02:");
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        continue;
    } else if (i == 15) {
        break;
    }
    console.log(i);
}

console.log("Ejercicio 03:");

let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i] + " es el mes " + (i + 1));
}

console.log("Ejercicio 04:");
let i = 0;
function numeroCinco() {
    numero = prompt("Introduce un número:");
    if (numero == 5) {
        console.log("El número 5 es impar.");
    }
}

numeroCinco();

console.log("Ejercicio 05:");
function mostrar(numero, texto) {

    if(typeof numero !== "number"){
        console.log("El primer argumento no es un número.");
        return;
    }
    
    if(typeof texto == "string"){
        for (let i = 0; i < numero; i++) {
            console.log(texto);
          }
        } else {
          console.log(1 / numero);
        }
}

mostrar(3, "Hola"); 
// Hola 3 veces

mostrar(4); 
// 0.25

mostrar("no es un número", "texto");
// El primer argumento no es un número.

console.log("Ejercicio 06:");
let nombre = "Seba"
let apellido = "Dalpra"

function mostrarNombreApellido (nombre, apellido) {
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    
    console.log(apellido.toUpperCase() + ", " + nombre)
}

mostrarNombreApellido(nombre, apellido)

console.log("Ejercicio 07:");

function truncate(cadena, longitud) {
    if (cadena.length > longitud) {
        console.log(cadena + "...");
    }
}

truncate("Hola Mundo", 5); // "Hola Mundo..."

console.log("Ejercicio 08:");

function crearArray(...numeros){
    let array = [];
    for (let i = 0; i < numeros.length; i++) {
        array.push(numeros);
    }
    console.log(numeros);
    return array;
}

crearArray(1, 2, 3, 4, 5); 

console.log("Ejercicio 09:");

const frutas = ["manzana", "banana"];

function copiarArray(arrayOriginal, ...array){
    let nuevoArray = arrayOriginal
    nuevoArray.push(...array);
    console.log(nuevoArray);
    return nuevoArray;
}

copiarArray(frutas, "naranja"); // ["manzana", "banana", "naranja"]

console.log("Ejercicio 10:");
estilos = ["jazz", "blues"];
estilos.push("rock-n-roll");
console.log("Array antes: " + estilos)

function reemplazarValorMedioArray(array, nuevoValor) {
    if (array.length % 2 == 0) {
        console.log("El array debe tener un número impar de elementos.");
        return;
    }
    else {
        let medio = Math.floor(array.length / 2);
        array[medio] = nuevoValor;
        console.log(array);
        return array;
    }
}

reemplazarValorMedioArray(estilos, "Heavy Metal"); 

console.log("Ejercicio 11:");

function minusculasOMayusculas(string) {
    if (/[A-Z]/.test(string) && /[a-z]/.test(string)) {
        console.log("String con mayúsculas y minúsculas: " + string);
    }
    else if (/[a-z]/.test(string)) {
        console.log("String con minúsculas. " + string);
    } 
    else if (/[A-Z]/.test(string)) {
        console.log("String con mayúsculas. " + string);
    };
}

minusculasOMayusculas("HOLA MUNDO"); // String con mayúsculas: HOLA MUNDO
minusculasOMayusculas("hola mundo"); // String con minúsculas: hola mundo
minusculasOMayusculas("Hola Mundo"); // String con mayúsculas y minúsculas: Hola Mundo

console.log("Ejercicio 12:");

function detectarPalindromo(string) {
    array = [];

    let texto = string.toLowerCase().replace(/\s/g, "");
    //console.log("Texto antes: " + texto)

    for (let index = texto.length; index >= 0; index--) {
        const element = texto[index];
        array.push(element)
    }
    
    let textoNuevo = array.join('');
    //console.log("Texto despues: " + textoNuevo);

        // verificar
    if (texto == textoNuevo) {
        console.log("Es Palindromo")
    }
    else {
        console.log("No es palindromo.")
    }
    
}

detectarPalindromo("La ruta nos aporto otro paso natural"); // true
detectarPalindromo("La ruta no nos aporto otro paso natural"); // false

