```javascript
// WEDSTRIJD INFORMATIE

function wedstrijdInfo() {

    document.getElementById("tegenstander").innerHTML = "Ajax";

    document.getElementById("datum").innerHTML = "12 oktober";

    document.getElementById("tijd").innerHTML = "14:30";

    document.getElementById("stadion").innerHTML = "Philips Stadion";

    document.getElementById("wedstrijdMelding").innerHTML =
        "De wedstrijdinformatie is geladen!";
}


// NIEUWS

function leesNieuws(nummer) {

    let melding = document.getElementById("nieuwsMelding");

    if (nummer == 1) {

        melding.innerHTML =
            "Je hebt nieuwsbericht 1 geopend.";

    }

    if (nummer == 2) {

        melding.innerHTML =
            "Je hebt nieuwsbericht 2 geopend.";

    }

    if (nummer == 3) {

        melding.innerHTML =
            "Je hebt nieuwsbericht 3 geopend.";
    }
}


// PSV KRIJGT 3 PUNTEN

function puntenToevoegen() {

    let punten = document.getElementById("psvPunten");

    let huidigePunten = Number(punten.innerHTML);

    punten.innerHTML = huidigePunten + 3;

    document.getElementById("puntenMelding").innerHTML =
        "PSV heeft 3 punten gekregen!";
}
```
