import { kartyakLetrehoz, megjelenit } from "./fuggvenyek.js";

export function kartyaRendezNev(lista) {
    const nevSzerintELEM = $("#rendez");
    nevSzerintELEM.on("change", function () {
        if (nevSzerintELEM.val() === "nev") {
            rendezesNev(lista);
            console.log(lista)
            megjelenit(kartyakLetrehoz(lista));
        }
    });
}

function rendezesNev(lista) {
    lista.sort(function (a, b) {
        return a.nev.toUpperCase() > b.nev.toUpperCase() ? 1 : -1;
    });
    return lista;
}

export function kartyaRendezArNov(lista) {
    const arSzerintiELEM = $("#rendez");
    arSzerintiELEM.on("change", function () {
        if (arSzerintiELEM.val() === "arn") {
            rendezesArN(lista);
            console.log(lista)
            megjelenit(kartyakLetrehoz(lista));
        }
    });

}

function rendezesArN(lista) {
    lista.sort(function (a, b) {
        return a.ar - b.ar;
    });
    return lista;
}

export function kartyaRendezArCsok(lista) {
    const arSzerintiELEM = $("#rendez");
    arSzerintiELEM.on("change", function () {
        if (arSzerintiELEM.val() === "arcs") {
            rendezesArCs(lista);
            console.log(lista)
            megjelenit(kartyakLetrehoz(lista));
        }
    });

}

function rendezesArCs(lista) {
    lista.sort(function (a, b) {
        return b.ar - a.ar;
    });
    return lista;
}

export function szures(lista, keresoSzoveg) {
    const szurtLista = lista.filter(function (auto) {
        return auto.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return szurtLista;
}

export function szures2(lista, keresoAr) {
    const szurtLista = lista.filter(function (auto) {
        return auto.ar === keresoAr;
    });
    return szurtLista;
}


export function torol(lista, index) {
    lista.splice(index, 1)
    return lista
}