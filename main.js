import { fagylaltokLISTA } from "./adat.js";
import { megjelenit, kartyakLetrehoz, megjelenitAdminhoz, tablazatLetrehozadminhoz } from "./fuggvenyek.js";
import { szures, szures2, torol, kartyaRendezArNov, kartyaRendezNev, kartyaRendezArCsok } from "./adatKezelo.js";
import { sorBeszur } from "./urlapKezelo.js";
import { kosarGomb, kosarTartalomOsszeallit } from "./kosar.js";
import { kosarLISTA } from "./kosarlista.js";

   
    let rIrany = 1;
    init(fagylaltokLISTA);
    szuresNevSzerint();
    szuresArSzerint();
    torolesemeny()
    sorBeszur(fagylaltokLISTA)
    rendezesek();
    kosarGomb();
    megjelenit();

    export function init(lista){
        var txt = kartyakLetrehoz(lista);
        megjelenit(txt);
        rendezesEsemeny();
        torolesemeny()

        var txt2 = tablazatLetrehozadminhoz(lista);
        megjelenitAdminhoz(txt2);
    }

    function rendezesek(){
        kartyaRendezNev(fagylaltokLISTA);
        kartyaRendezArNov(fagylaltokLISTA);
        kartyaRendezArCsok(fagylaltokLISTA);
    }

    function szuresNevSzerint(){
        const szuroElem = $("#sznev");
        szuroElem.on("keyup", function(){
            let szoveg = szuroElem.val();
            init(szures(fagylaltokLISTA, szoveg));
        });
    }

    function szuresArSzerint(){
        const szuroElem = $("#szar");
        szuroElem.on("keyup", function(){
            let ar = parseFloat(szuroElem.val());
            if (!isNaN(ar)) {
                init(szures2(fagylaltokLISTA, ar));
            }
        });
    }



    function rendezesEsemeny(){

        /* ha rákattintunk a táblázat fejlécében lévő név mezőre */
        const nevMezoElem = $(".adatok table th").eq(0);
        nevMezoElem.on("click", function(){
            const lista = rendez(fagylaltokLISTA, "nev", rIrany);
            console.log(lista);
            init(lista);
            rIrany*=-1;
        })
    }

    function torolesemeny() {
        const torolELEM = $(".torol")
        torolELEM.on("click", function (event) {
            let index = event.target.id;
            // ez váltotta ki az eseményt
            const LISTA= torol(fagylaltokLISTA,index)
            init(LISTA)
        })
    }