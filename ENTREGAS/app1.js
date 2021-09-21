function funcion(){
nombreUsuario = prompt ("Nombre");

alert ( "Hola " + nombreUsuario);

console.log( "Hola" + nombreUsuario );

edadUsuario = prompt ("Edad");

inicioVicio = prompt ("A que edad empezaste a fumar?");

cantidadxDia = prompt ("Cuantos cigarrillos por dia fumas?");

var tiempoFuma = edadUsuario - inicioVicio;

var totalFuma = (tiempoFuma * cantidadxDia) * 365;

alert ( "Llevas fumados aproximadamente " + totalFuma + " cigarrillos, afloja un poco!")

console.log( "Llevas fumados aproximadamente " + totalFuma + " cigarrillos, afloja un poco!" )}