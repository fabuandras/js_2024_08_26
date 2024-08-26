import { fagylaltokLISTA } from "./adat.js";
import { kosarLISTA } from "./kosarlista.js";

export function kosarTartalomOsszeallit(lista){
    let txt = "";
    lista.forEach(elem => {
        txt += `<div>`;
        txt += `<p><img class="kosarbanlevokep" src="${elem.kep}" alt="${elem.nev}"</p>`;
        txt += `<p class="kosarelemnev">${elem.nev}</p>`;
        txt += `<p class="kosarelemar">${elem.ar}Ft</p>`;
        txt += `<hr />`;
        txt += `</div>`;
    });
    return txt;
}

export function kosarGomb(){
    const kosarELEM = $(".kosar");
    kosarELEM.on("click", function(event){
        const termekIndex = event.target.id;
        kosarLISTA.push(fagylaltokLISTA[termekIndex]);
        kosarInit(kosarLISTA);
    });
}

export function kosarInit(lista){
    const tartalom = kosarTartalomOsszeallit(lista);
    const tartalomELEM = $(".kosarTartalom");
    tartalomELEM.html(tartalom);
}