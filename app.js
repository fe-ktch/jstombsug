/*
File: app.js
Author: Sangare Fantha Felisha
Copyright: 2022, Sangare Fantha Felisha
Group: Szoft I N
Date: 2022-02-28
Github: https://github.com/fe-ktch/
Licence: GNU GPL
*/

function calcRomb() {
    var oldal = parseFloat(document.getElementById('oldal').value);
    var alfaszog = parseFloat(document.getElementById('alfaszog').value);

    var output = document.getElementById('output');

    if(isNaN(oldal) || isNaN(alfaszog)) {
        output.textContent = "Adjon meg két számot!";
    }else {
        /*var sugar = (0.5*oldal)*(Math.sin(alfaszog));*/
        /*var sugar = oldal * ((Math.sin(alfaszog) / 2) / 2);*/
        var sugar = (1 / 2) * (oldal * Math.sin(alfaszog));
        output.textContent = sugar;
    }
};