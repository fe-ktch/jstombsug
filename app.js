function calcRomb() {
    var oldal = parseFloat(document.getElementById('oldal').value);
    var alfaszog = parseFloat(document.getElementById('alfaszog').value);

    var output = document.getElementById('output');

    if(isNaN(oldal) || isNaN(alfaszog)) {
        output.textContent = "Adjon meg két számot!";
    }else {
        var sugar = (1/2) * oldal * Math.sin(oldal);
        output.textContent = sugar;
    }
};