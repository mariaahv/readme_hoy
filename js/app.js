//function cipher(atm, money) {
//crear una variable y asignar el abecedario
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//crear arr ;donde almacenare el str convertido a un arreglo
  var arr=alphabet.split('');
  var positionAsci=0;;
  var newPosition=0;
  var positionIndex=0;
  var newPosition="";
  var newLetter='';

  // El usuario ingresara la palabra
  var input = prompt("Ingrese la palabra:");
  //con un for recorreremos la palabra dada
  for (var i = 0; i < input.length ; i++) {
  //charAt me devuelve la letra con el indice indicado Ejm A
  //charCodeAt devuelve elvalor correspondiente de la letra segun ascii EJM 65
  positionAsci=(input.charAt(i)).charCodeAt();
  //positionAsci almacena el numero ascii de cada letra
  positionIndex=arr.indexOf(input.charAt(i));
  // charAt devuelve la letra con el indice dado
  //indexOf devuelve el indice de dicha letra
  //asi obtenemos con positionIndex la posicion(indice) de cada letra
  newPosition=(positionIndex + 33) % 26;
  //aplicamos la formula de cesar
  newLetter+=arr[newPosition];
  //en newLetter obtenemos la
  console.log(newLetter)
}
//};
