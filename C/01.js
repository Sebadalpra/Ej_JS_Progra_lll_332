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