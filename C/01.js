console.log("Ejercicio 01:")
console.log("HOLA MUNDO!")
console.log("Puedo mostrar comillas ´simples´")
console.log("Puedo mostrar comillas \"dobles\"")

console.log("Ejercicio 02:")
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        continue
    }
    else if (i == 15) {
        break
    }
    console.log(i)
}