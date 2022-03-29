var arrayVJuegos = ["Mass Effect", "COD4", "Battlefield 3", "Elden Ring", "Mario", "LoL"];
var juegoEliminado = "Mario";
function imprimirJuegos(arrayVJuegos, juegoEliminado) {
    var stringJuegos = "";
    for (let i = 0; i < arrayVJuegos.length; i++) {
        if (arrayVJuegos[i] != juegoEliminado) {
            stringJuegos += i + "-" + arrayVJuegos[i] + "\n";
        }
    }
    return stringJuegos;
}
console.log("Lista de videojuegos: " + imprimirJuegos(arrayVJuegos, juegoEliminado));
