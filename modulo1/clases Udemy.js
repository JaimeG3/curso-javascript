//ejemplo equipo de fut
var t = "tolima"
var n = "nacional"  
var golT = 0 
var golN = 0
golT++
golT++
golN++
golN++
golN--
console.log(golT)
var marcador = "tolima" + ' ' + golT + '-' + golN + ' ' + "nacional"
console.log(marcador)

//ejercicios
//Precio de una camiseta. 
var camisetas = { "14.99, 20.00 , 34.49 "}  
 
// Edad de una persona.
 var edad = 25

 //Velocidad de la luz en m/s
 const VLuz = "2,998e+8"

 //Gravedad en la Tierra en m/s 
 const GTierra = "9,80665"


 //- El precio base de cierto producto alimenticio es de 4.56€. A tal precio se le tiene
//que aplicar un impuesto de 7% para conocer el precio final de venta. Utiliza una
//variable para el precio base, una constante para el impuesto y otra variable para
//el precio final. Calcula el precio final.

var base = 4.56
const impuesto = 4.56 * (0,7) / 100
var precioFinal = base + impuesto 
console.log(precioFinal)
precioFinal = 4.8792

//Aplícale a ese producto una oferta de descuento del 15%.
//Puedes hacerlo de muchas maneras, por ejemplo:
//primero multiplicando el precio base por 85 y después diviendo entre 100,
//o también multiplicando el precio base por 0.85.
//No importa si escoges alguno de estos procedimientos u otros cálculos matemáticos.
//Pero hazlo con operadores acumulativos

base *= 0.85

//Esta es una app para control de tu
//cuenta bancaria. Puedes observar tu saldo total y
//enviar dinero a otras cuentas.
//¿Qué operación y variables usarías con esos 2 datos
//cuando el usuario pulse el botón “Continuar” ?
var DC = 14000
var ED = prompt("envia dinero")
 for (ED <= DC ) = alert("continuar") else if
 (ED >= DC ) = alert("continuar")




//- Imagina un multicine con 7 salas donde proyectar películas.
//Crea un array donde almacenar los títulos de cada una de ellas

var peliculas = ["1,2, 3, 4 ,5 ,6, 7"]

//- Las 3 primeras salas proyectan en 3D, de modo que el precio de entrada es más caro.
//Así que ahora tienes que guardar el precio de entrada para cada película.
//Para ello usa una matriz, en lugar de un array, donde sigas almacenando el título
//de cada película y además su correspondiente precio.
var tituloFilm = new Array(7);
tituloFilm[0] = "Sicario";
tituloFilm[1] = "Secreto de la pirámide";
tituloFilm[2] = "Linea de meta";
tituloFilm[3] = "La Adopción";
tituloFilm[4] = "La final";
tituloFilm[5] = "Sonata para Violonchelo";
tituloFilm[6] = "Letras Explícitas";

var precioFilm = new Array(7);
precioFilm[0] = 9;
precioFilm[1] = 9;
precioFilm[2] = 9;
precioFilm[3] = 6;
precioFilm[4] = 6;
precioFilm[5] = 6;
precioFilm[6] = 6;

var diaVisualizacion = new Array (7);
diaVisualizacion[0] = "Lunes";
diaVisualizacion[1] = "Martes";
diaVisualizacion[2] = "Miércoles";
diaVisualizacion[3] = "Jueves";
diaVisualizacion[4] = "Viernes";
diaVisualizacion[5] = "Sábado";
diaVisualizacion[6] = "Domingo";



for(i=1; i<=10 ; i=++){
    alert( 7 x i = 7*i)
}


string_pelicula[x][y]= new string [6][2]
pelicula[0][0]="Sicario"
pelicula[0][1]= "9"
pelicula[0][2]="lunes"
pelicula[1][0]="Secreto de la pirámide"
pelicula[1][1]="9"