function funcion() {
    

let empezar = prompt("Bienvenido a la calculadora de gastos mensuales. Para empezar ingrese si, para salir, no.")
if(empezar == 'si'){
    calculadora();
}
else (alert("Hasta Luego."))

var ingresos = 0
var totalTarj = 0
var totalEfect = 0

function calculadora (){

var gastosGral = prompt("Cargar gastos con tarjeta de credito o efectivo? Responder TARJETA o EFECTIVO. Si no desea cargar gastos y saber el balance, escriba TOTAL.");
gastosGral = gastosGral.toLowerCase();
    if(gastosGral == "tarjeta"){
    gastosTarj();
}
    else if(gastosGral == "efectivo"){
    gastosEfectivo();
}
    else (totalGastos());
}
function gastosEfectivo (lugar , montoGasto){
    for (let i = 0; i < 1; i++) {
        var lugar = prompt("Lugar");
        var montoGasto = parseInt(prompt("Monto de compra"));
    }
    totalEfect = montoGasto;
    let continuar = prompt("Desea cargar mas gastos en efectivo? si o no.");
    continuar = continuar.toLowerCase();
    if (continuar == 'si'){
        gastosEfectivo();
    }
    else (calculadora());
}

function gastosTarj (tarjeta , montoCompra , cuotas ){
    for (let i = 0; i < 1; i++) {
        var tarjeta = prompt("Nombre Tarjeta");
        var montoCompra = parseInt(prompt("Monto de compra"));
        var cuotas = parseInt(prompt("Cantidad de cuotas"));
    }
    totalTarj = montoCompra;
    let continuar = prompt("Desea cargar mas gastos con tarjeta? si o no.");
    continuar = continuar.toLowerCase();
    if (continuar == 'si'){
        gastosTarj();
    }
    else (calculadora());
}
function totalGastos (){
    ingresos = parseInt(prompt("Ingresos mensuales:"));
    gastoTotal = totalTarj + totalEfect;
    restoTotal = ingresos - gastoTotal;
    alert("Sus ingresos son de $ " + ingresos);
    alert("Sus gastos con tarjeta son de $ " + totalTarj);
    alert("Sus gastos en efectivo son de $ " + totalEfect);
    alert("Sus gastos total es de $ " + gastoTotal);
    alert("El restante de sus ingresos es de $ " + restoTotal);

}}