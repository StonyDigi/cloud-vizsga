function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById('clock').innerHTML = 'A pontos idő: ' + '<strong>' + hours + ':' + minutes + ':' + seconds + '</strong>';
    setTimeout(updateClock, 1000); // Minden másodpercben frissítse az órát
}
window.onload = updateClock; // Az oldal betöltődésekor indítsa el az óra frissítését