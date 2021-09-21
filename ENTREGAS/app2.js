function funcion() {
let nombreUsuario = prompt ("Ingresar nombre")
let numeroUno = parseInt (prompt("Ingrese un numero"))
if (numeroUno > 1000) {
    alert ("El numero " + numeroUno + " es mayor a 1000")
}
else{
    console.log ("El numero es menor que 1000")
}}
function funcionDos() {
let nombreUsuarioDos = prompt ("Ingresar nombre")
let saludo = prompt ("Ingrese saludo")
if ((saludo == "Hola") || (saludo == "hola") || (saludo == "HOLA"))
{
    console.log ("El mensaje de saludo es igual a Hola")
}
else{
    alert ("El mensaje de saludo NO es igual a Hola")
}}
function funcionTres() {
let nombreUsuarioTres = prompt ("Ingresar nombre")
let numero = parseInt (prompt("Ingrese un numero")) 
if (numero >= 10 && numero <= 50) {
    alert ("El numero ingresado esta entre 10 y 50")
}
else {
    console.log ("El numero ingresado NO esta entre 10 y 50")
}}