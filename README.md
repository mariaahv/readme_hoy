#  CIFRADO CESAR #
## PSEUDOODIGO ##
### A continuacion les presento mi PSEUDOODIGO:
###  => algoritmo CESAR
## variables :
### * letra
### * positionLetra
### * valorfijo
### * Positionasci
### * nuevaletra
# INICIO
##  Escribir(" ingrese la palabra o frase ")
##  Leer letra
##  Buscamos el indice o posicion de la letra (positionLetra)
##  aplicamos la formula de cesar para obtenerlo en el asci
## * formula= (positionLetra + Valorfijo)%26
## imprime la posicion en el codigo asci de la letra ingresada
## aplicamos la formula para hallar la nuevaletra ,convertindo de numero a letra
## nuevaletra=(Positionasci  - 65 + Valorfijo)%26 + 65)
##  Imprime output .
## escribir( "la nueva letra es: output")
# FIN
