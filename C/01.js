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
    if (typeof numero !== "number") {
        console.log("El primer argumento no es un número.");
        return;
    }

    if (typeof texto == "string") {
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
let nombre = "Seba";
let apellido = "Dalpra";

function mostrarNombreApellido(nombre, apellido) {
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    console.log(apellido.toUpperCase() + ", " + nombre);
}

mostrarNombreApellido(nombre, apellido);

console.log("Ejercicio 07:");

function truncate(cadena, longitud) {
    if (cadena.length > longitud) {
        console.log(cadena + "...");
    }
}

truncate("Hola Mundo", 5); // "Hola Mundo..."

console.log("Ejercicio 08:");

function crearArray(...numeros) {
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

function copiarArray(arrayOriginal, ...array) {
    let nuevoArray = arrayOriginal;
    nuevoArray.push(...array);
    console.log(nuevoArray);
    return nuevoArray;
}

copiarArray(frutas, "naranja"); // ["manzana", "banana", "naranja"]

console.log("Ejercicio 10:");
estilos = ["jazz", "blues"];
estilos.push("rock-n-roll");
console.log("Array antes: " + estilos);

function reemplazarValorMedioArray(array, nuevoValor) {
    if (array.length % 2 == 0) {
        console.log("El array debe tener un número impar de elementos.");
        return;
    } else {
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
    } else if (/[a-z]/.test(string)) {
        console.log("String con minúsculas. " + string);
    } else if (/[A-Z]/.test(string)) {
        console.log("String con mayúsculas. " + string);
    }
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
        array.push(element);
    }

    let textoNuevo = array.join("");
    //console.log("Texto despues: " + textoNuevo);

    // verificar
    //operador ternario, esta bueno para if else entre 2 opciones:
    console.log(texto == textoNuevo ? "Es palindromo" : "No es palindromo");
}

detectarPalindromo("La ruta nos aporto otro paso natural"); // true
detectarPalindromo("La ruta no nos aporto otro paso natural"); // false

console.log("Ejercicio 13:");

arrayNumerico = [1, -2, -3, 4, -9, -6];

function obtenerSumaMaxima(array) {
    // si todos cumplen la condicion de ser negativos sera true y retorna 0
    if (array.every((numero) => numero < 0)) {
        return 0;
    } else {
        // recordar q filter me da un array nuevo de la condicion que quiero, en este caso de solo nros positivos.
        let positivos = array.filter((numero) => numero > 0);
        console.log("positivos " + positivos);
        // reduce me suma empezando en 0 (el ultimo valor dado en la sintaxis), acumulando y sumando el nro sig.
        let suma = positivos.reduce(
            (acumulador, numero) => acumulador + numero,
            0
        );
        return suma;
    }
}

console.log(obtenerSumaMaxima(arrayNumerico));

console.log("Ejercicio 14:");

const signosZodiaco = [
    { signo: "Aries", fechaInicio: "21/03", fechaFin: "19/04" },
    { signo: "Tauro", fechaInicio: "20/04", fechaFin: "20/05" },
    { signo: "Géminis", fechaInicio: "21/05", fechaFin: "20/06" },
    { signo: "Cáncer", fechaInicio: "21/06", fechaFin: "22/07" },
    { signo: "Leo", fechaInicio: "23/07", fechaFin: "22/08" },
    { signo: "Virgo", fechaInicio: "23/08", fechaFin: "22/09" },
    { signo: "Libra", fechaInicio: "23/09", fechaFin: "22/10" },
    { signo: "Escorpio", fechaInicio: "23/10", fechaFin: "21/11" },
    { signo: "Sagitario", fechaInicio: "22/11", fechaFin: "21/12" },
    { signo: "Capricornio", fechaInicio: "22/12", fechaFin: "19/01" },
    { signo: "Acuario", fechaInicio: "20/01", fechaFin: "18/02" },
    { signo: "Piscis", fechaInicio: "19/02", fechaFin: "20/03" },
];


function fechaNacimiento(array, date) {
    // Convierte la fecha de nacimiento a formato comparable
    const fecha = date.split("-");
    const dia = parseInt(fecha[0]);
    const mes = parseInt(fecha[1]);
    const fechaNumero = mes * 100 + dia; // Formato MMDD para comparación
    console.log(fechaNumero)

    array.forEach(signo => {
        // Convierte las fechas de inicio y fin de cada signo a formato comparable
        let fechaDeInicio = signo.fechaInicio.split("/");
        let fechaDeFin = signo.fechaFin.split("/");

        let inicioDia = parseInt(fechaDeInicio[0]);
        let inicioMes = parseInt(fechaDeInicio[1]);
        let inicioFecha = inicioMes * 100 + inicioDia;

        let finalDia = parseInt(fechaDeFin[0]);
        let finalMes = parseInt(fechaDeFin[1]);
        let finalFecha = finalMes * 100 + finalDia;

        // Verifica si la fecha de nacimiento está en el rango de fechas del signo
        if (fechaNumero >= inicioFecha && fechaNumero <= finalFecha) {
            console.log(`Tu signo es ${signo.signo}`);
        } else {
            // Si la fecha de fin es en el año siguiente, se considera el rango cruzado de años
            if (finalFecha < inicioFecha) {
                if (fechaNumero >= inicioFecha || fechaNumero <= finalFecha) {
                    console.log(`Tu signo es ${signo.signo}`);
                }
            }
        }
    });
}

fechaNacimiento(signosZodiaco, "21/02/2000");
