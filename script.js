let pontosTimeA = 0;
let pontosTimeB = 0;

function incrementarPontos(time) {
    if (time === 'A') {
        pontosTimeA++;
        document.getElementById('pontosTimeA').innerText = pontosTimeA;
    } else if (time === 'B') {
        pontosTimeB++;
        document.getElementById('pontosTimeB').innerText = pontosTimeB;
    }
}
