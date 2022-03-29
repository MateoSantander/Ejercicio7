var arrayVJuegos : String[] = ["Mass Effect", "COD4", "Battlefield 3", "Elden Ring", "Mario", "LoL"];
var juegoEliminado : String = "Mario"
function imprimirJuegos(arrayVJuegos :String[], juegoEliminado : String){
    var stringJuegos : String = "";
    for(let i = 0; i<arrayVJuegos.length; i++){
        if(arrayVJuegos[i]!=juegoEliminado){
            stringJuegos += i + "-" + arrayVJuegos[i] + "\n";
        }
    }
    return stringJuegos;
}

console.log("Lista de videojuegos: " + imprimirJuegos(arrayVJuegos,juegoEliminado));