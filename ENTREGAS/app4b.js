function funcionDos() {
    

let iva = 0.21
let cupon1 = "ASDF"
let cupon2 = "QWER"
let precioValija = 400
let km = 0
let preciokm = 12
let precioViaje = 0
let usuario = 0
let valija = 0
let pasajeros = 0

let destino = prompt("Bienvenido, elija su destino: Miami / Madrid / Tokyo");
destino = destino.toLowerCase();
if (destino === 'miami'){
    calculadoramia()
}
else if (destino === 'madrid'){
    calculadoramadrid()
}
else if (destino === 'tokyo'){
    calculadoratokyo()
}
else (alert("El destino no esta disponible por el momento."))

function calculadoramia() {
    km = 9000;
    precioViaje = km * 12;
    usuario = prompt("Ingrese su nombre");
    valija = parseInt(prompt("Cuantas valijas lleva? Maximo 2."));
    pasajeros = parseInt(prompt("Cuantos pasajeros son?"));
    
}
function calculadoramadrid() {
    km = 15000;
    precioViaje = km * 12;
    usuario = prompt("Ingrese su nombre");
    valija = parseInt(prompt("Cuantas valijas lleva? Maximo 2."));
    pasajeros = parseInt(prompt("Cuantos pasajeros son?"));
}
function calculadoratokyo() {
    km = 20000;
    precioViaje = km * 12;
    usuario = prompt("Ingrese su nombre");
    valija = parseInt(prompt("Cuantas valijas lleva? Maximo 2."));
    pasajeros = parseInt(prompt("Cuantos pasajeros son?"));
}
let situacionAfip = prompt("Ingrese su situacion frente AFIP: Monotributo o RI")
situacionAfip = situacionAfip.toLowerCase();
if (situacionAfip == "monotributo"){
    precioViaje = precioViaje + (valija * precioValija) * pasajeros;
    alert(usuario + " el precio del viaje para " + pasajeros + " con " + valija + " valijas cada uno es de $ " + precioViaje + " finales." ) 
    let cupon = prompt(usuario + ", posee un cupon de descuento? si posee ingrese el codigo, sino, ingrese no.") 
    cupon = cupon.toLowerCase()
    if (cupon = "ASDF"){
        let nuevoPrecioViaje = precioViaje - 2000;
        alert("Su nuevo precio de viaje es de $" + nuevoPrecioViaje );
    }
    else if (cupon = "QWER"){
        let nuevoPrecioViaje = precioViaje - 800;
        alert("Su nuevo precio de viaje es de $" + nuevoPrecioViaje );
    }
    else (alert("Hasta Luego"));}
else (descuentoIVA())

function descuentoIVA() {
    precioViajeConIva = precioViaje + (valija * precioValija) * pasajeros;
    precioViaje = precioViajeConIva - (precioViajeConIva * iva);
    alert(usuario + " el precio del viaje para " + pasajeros + " con " + valija + " valijas cada uno es de $ " + precioViaje + " finales." )
    let cupon = prompt(usuario + ", posee un cupon de descuento? si posee ingrese el codigo, sino, ingrese no.") 
    cupon = cupon.toLowerCase()
    if (cupon = "ASDF"){
        let nuevoPrecioViaje = precioViaje - 2000;
        alert("Su nuevo precio de viaje es de $" + nuevoPrecioViaje );
    }
    else if (cupon = "QWER"){
        let nuevoPrecioViaje = precioViaje - 800;
        alert("Su nuevo precio de viaje es de $" + nuevoPrecioViaje );
    }
    else (alert("Hasta Luego"));
}
}
