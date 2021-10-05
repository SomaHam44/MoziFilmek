class Film {
    nev;
    rendezo;
    kiadasiEv;
    

    constructor(nev, rendezo, kiadasEve) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiEv = kiadasEve;
        

    }
}
let tomb = [];

function hozzaadas() {
    let filmNev = document.getElementById("name").value;
    let filmRendezo = document.getElementById("rendezo").value;
    let filmKiadasiEve = document.getElementById("kiadas").value;
    let obj = new Film(filmNev,filmRendezo,filmKiadasiEve);
    tomb.push(obj);
    filmNev = "";
    filmRendezo = "";
    filmKiadasiEve  = "";
    
}


document.getElementById("hozza").addEventListener("click", hozzaadas);





function listazas() {
   
    let tablazat = "<table>";
    for (let i = 0; i < tomb.length; i++) {
        tablazat += "<tr>";
        tablazat += "<td>" + tomb[i].nev + "</td>";
        tablazat += "<td>" + tomb[i].rendezo + "</td>";
        tablazat += "<td>" + tomb[i].kiadasiEv + "</td>";
        tablazat += "</tr>";
        
    }
    tablazat += "</table>";
    document.getElementById("tabla").innerHTML = tablazat;

    
    
    
    

}

document.getElementById("listaz").addEventListener("click", listazas);

