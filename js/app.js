
function cipher(word){
 var str='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//creamos un string y le asignamos el abecedario

var array=str.split('');
// convertimos el string a un array
var newLetter='';

do{
  //ingresamos la palabra
  var word=prompt('Ingrese texto');

  // validamos que no se ingresen numeros ,ni sea vacio
}while(!isNaN(word) || word.length===0);
for(var i=0;i<word.length;i++)
//recorremos el  indice de la palabra dada
{

  //charAt me devuelve la letra con el indice indicado Ejm A
  //positionAsci devuelve elvalor correspondiente segun ascii EJM 65
  positionAsci=(word.charAt(i)).charCodeAt();

  //posiition =indice de la letra en el array
  position=array.indexOf(word.charAt(i));

  //aplicamos la formula dada
  newPosition=(position+33)%26;

  // obtenemos lanueva letra
  newLetter+=array[newPosition];

}
return newLetter;

}



cipher("AB")
