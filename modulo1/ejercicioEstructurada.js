// 1- ¿Qué bucle y variables usarías para hacer la comprobación después que el
// usuario introduzca 2 veces el pin?
var i = prompt("cual es la contraseña")
var p = prompt("confirme contraseña")
if(i==p) {
    alert("contraseña valida")
    continue
} else if (i != p ){
    alert('contraeña invalida')
    return
}
