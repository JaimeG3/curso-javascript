//ejercicio uno
/*const list=[1,2,2,3,6,7,6]
let repetidos =[]
function retornar(){
for(let i = 0; i < list.length; i++){
  if(repetidos.includes(list[i])){
    console.log("se repite el numero" + list[i])
  }else{
    repetidos.push(list[i])
  }
  }
}
retornar()
console.log(repetidos)*/



//ejercicio  ORGANIZAR UN ARRAY

/*let list = [4, 3, 502, 1];

let organizarArray = () => {
  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = list[i];
      list[i] = list[minIndex];
      list[minIndex] = temp;
    }
  }
}

organizarArray();
console.log(list); // [1, 3, 4, 502]




let list =[4,3,502,1]
let organizarArray = () => {
 for(let i=0; i<list.length;i++){
  if(list[0]>list[i]){
      let temp = list[0]
    list[0]=list[i]
    list[i]= temp
  } else if(list[1]<list[2]){
  let s = list[0]
    list[0]=list[i]
    list[i]= s
  }
 }
} 
organizarArray()
console.log(list)


*/

//ejercicio  VALIDAR UN FORMULARIO



/* function validarFormulario(usuario = "Samamijaju",contraseña="jjcaro",email="jaimejose") {
  let usuarioEsValido: false
  let contraseñaEsValida: false
  let emailEsValido: false
  if(usuario.length >= 6){
    usuarioEsValido :true
  } if(contraseña.length >= 8 && contraseña.includes(string,number,"@") ){
     contraseñaEsvalida:true
  } if(email.includes("@")){
    emailEsValido:true
  } 
else{
 
}
}
validarFormulario()


corregido por chat gpt

function validarFormulario(usuario = "Samamijaju", contraseña = "jjcaro", email = "jaimejose") {
  let usuarioEsValido = false;
  let contraseñaEsValida = false;
  let emailEsValido = false;

  if (usuario.length >= 6) {
    usuarioEsValido = true;
  }
  
  if (contraseña.length >= 8 && contraseña.match(/[a-zA-Z]/) && contraseña.match(/[0-9]/) && contraseña.includes("@")) {
    contraseñaEsValida = true;
  }

  if (email.includes("@")) {
    emailEsValido = true;
  }

  if (usuarioEsValido && contraseñaEsValida && emailEsValido) {
    console.log("El formulario es válido");
  } else {
    console.log("El formulario es inválido");
  }
}

validarFormulario();






//ejercicio CARRITO DE COMPRAS


let articulo = {
  "manzana" : {
  valor:2000,
  cantidad:3
},
  "pan" :{
  valor:1000,
    cantidad:6
},
  "jugo" : {
    valor:3000,
    cantidad:5,
  }
}
function agregarArticulo (nombre,precio,cantidad2){
  if(articulo[nombre]){
  articulo[nombre].cantidad += cantidad2
  } else if(!isNaN(precio)&& !isNaN(cantidad2)){
    articulo[nombre]={
      valor:precio,
      cantidad:cantidad2
    }
  }
}
function quitarArticulo(nombre){
  if(articulo[nombre]){
    delete articulo[nombre]
}else{
}
}

function cambiarCantidad (nombre,nuevaCantidad){
  if(articulo[nombre]){
    articulo[nombre].cantidad=nuevaCantidad
} else {
  alert("no se encuentra ${nombre} en el articulo");
}
}

function calcularTotal (nombre, cantidadCompra){
  let total= undefined;
  if(cantidadCompra<articulo[nombre].cantidad){
   total = (articulo[nombre].precio * cantidadCompra)
} else {
  alert("el articulo ${nombre} no tiene esa cantidad");
}
}
agregarArticulo ("pera",2000,5)
agregarArticulo ("papa",1500,6)
quitarArticulo("")
cambiarCantidad("manzana",9)
calcularTotal("pera", 4)
console.log(articulo)
console.log(total)


//ejercicio soy henry

function palabraMasLarga (array=["hola esto jaime", "hola pedro", "hola sandra"]) {
  let resultado = "";
  for (let i=0; i<array.length; i++){
    let frase = array[i].split(" ")
      for ( let i2=0; i2<frase.length; i2++){
        const  palabra = frase[i2]
        if(palabra.length > resultado.length){
          resultado = palabra
             console.log(palabra)
        }
  }
}
  return resultado

}

palabraMasLarga()



//ejercicio suma de numeros

function encontrarPares (numeros,objetivo){
  let respuesta = 0
  let dos =[]
  for(let contador = 0;contador < numeros.length - 1;contador++){
    let numeroIndividual= numeros[contador]
   for(let contador2 = contador + 1; contador2 <  numeros.length; contador2++){
     let suma = numeros[contador] + numeros[contador2]
   if( suma === objetivo){
     dos.push([numeros[contador],numeros[contador2]])
   respuesta = suma
   }else {
   }
    
   }
  }
  
  console.log(dos)
  
}


encontrarPares( numeros=[2,4,6,8,10],objetivo=12)




// map , some , tags , includes , reduce, set , find ,filter , every , array from,












*/ 
