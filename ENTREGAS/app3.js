function funcion() {
    var totalA = 0;
    var totalB = 0;
    for (let i = 0; i < 10; i++) {
        let nombreUsuario = prompt("Ingrese su nombre");
        let votoUsuario = prompt("Ingrese A o B");
        votoUsuario = votoUsuario.toLowerCase();
        if (votoUsuario == "a") {
            console.log("El nombre del usuario es:" + nombreUsuario);
            console.log("VOTO POR A");
            totalA = totalA + 1;
            console.log(totalA);
        } else if (votoUsuario == "b") {
            console.log("El nombre del usuario es:" + nombreUsuario);
            console.log("VOTO POR B");
            totalB = totalB + 1;
            console.log(totalB);
        }
    }
    console.log("El partido A tiene un total de " + totalA + " votos.");
    console.log("El partido B tiene un total de " + totalB + " votos.");
    if (totalA < totalB) {
        alert("El ganador es el partido B con un total de " + totalB + " votos contra " + totalA + " votos del partido A.");
    } else if (totalB < totalA) {
        alert("El ganador es el partido A con un total de " + totalA + " votos contra " + totalB + " votos del partido B.");
    } else (alert("La eleccion es un empate con un total de " + totalA + " votos del partido A y " + totalB + " votos del partido B."));
}