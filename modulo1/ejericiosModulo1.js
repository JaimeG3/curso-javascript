//1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
let pedir = prompt("dame la edad")
if(Number(pedir)==pedir){
if (pedir >= 18 ){
    document.write("ya puedes conducir <br />")
} else {
    document.write("no puedes conducir <br />")
}
}


/*2. Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente  

    