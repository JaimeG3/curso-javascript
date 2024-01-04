/*1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
let pedir = prompt("dame la edad")
if(Number(pedir)==pedir){
if (pedir >= 18 ){
    document.write("ya puedes conducir <br />")
} else {
    document.write("no puedes conducir <br />")
}
}
*/

/*2. Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente  */
do {
	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
	var nota = prompt("Introduce tu nota");
	//SI SE INTRODUJO UN NÚMERO
	if (Number(nota) == nota) {
		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiete");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		//SI LA NOTA NO ES ENTRE 0 Y 10
		else {
			alert("Nota erronea");
		}
	}
	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
	else {
		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
		if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido");
		}
	}
//EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
} while (nota != undefined);	//Undefined es cuando se pulsa Cancelar.


/* let nota = prompt("dame la nota")
if(Number(nota)== nota){

if(nota<=3){
    alert("Muy deficiente")
}else if(nota > 3 && nota <=5 ){
    alert("Insuficiente")
}
else if((nota > 5) && (nota <=6)){
    alert("Suficiente")
}else if((nota > 6) && (nota <=7)){
    alert(" Bien")
}else if((nota > 7) && (nota <=9)){
    alert("Notable")
}else if((nota > 9) && (nota <=10)){
    alert("Sobresaliente")
}

}
*/
//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.



do{
    
}while



