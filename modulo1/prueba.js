//tipos de datos nulos e indefinidos
const constNula = null
const constIndefinida = undefined 
constIndefinida = 0
//modificadores de listas 
var lista = ["modulo 1", "modulo 2", "modulo 3"]
var primerElemento = lista[1]
console.log(primerElemento)
//agregar elementos a lista
lista.push("modulo4")
console.log(lista)
//quitar elemento de lista
lista.pop()
console.log(lista)
const ultimoElemento = lista.pop()
//modificadores booleanos
var verdadero = true
verdadero = !verdadero
var falso = false
falso = falso
falso = !verdadero
verdadero = !verdadero
//objetos en js
var persona = {
    nombre: "jaime",
    edad: 18,
    colorFavorito: "negro",
}
console.log(persona)
//imprimir propiedades de un objeto
console.log(persona.edad)
const nombrePersona = (persona.nombre)
//agregar objeto
persona.novia = "natalia"
console.log(persona)
//eliminar objetos
delete persona.colorFavorito
console.log(persona)
var natalia = {
    nombre: {
        nombre: "natalia",
        apellido: "vallejo",
        segundoApellido: "salazar",
    },
    colorFavorito: "negro",
    comidaFavorita: "jaime",
}
console.log(natalia.nombre.segundoApellido)
//comparadores (>, <, ===, !==, !)
//mayor y meno que
5 > 4 //true
5 < 4 //false
//igual
100 === 100 //true
100 === 99  //false
//diferencia
4 !== 4
true !== false
//operadores logicos
true && true && false // false
true && true && true // true
//0r
true || true || false // true
false || false ||false // false
(4 > 3) && (5 > 2)
(4 < 3) || (5 > 3)

