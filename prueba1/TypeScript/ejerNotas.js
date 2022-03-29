var nParciales = [7.5, 5.2, 4.0];
var examenF = 6.0;
var trabajoF = 9.1;
function calificacionFinal(nParciales, examenF, trabajoF) {
    var sumParciales = mediaParciales(nParciales);
    return sumParciales + (examenF * 0.3) + (trabajoF * 0.15);
}
function mediaParciales(nParciales) {
    var sumaTotal = 0;
    for (let i = 0; i < nParciales.length; i++) {
        sumaTotal += nParciales[i];
    }
    return sumaTotal * 0.55;
}
console.log("Tu calificacion final es: " + calificacionFinal(nParciales, examenF, trabajoF));
