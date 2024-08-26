# Webáruház

## Specifikáció

Jelenítsük meg az adatainkat egy táblázatban az adatok divben. Az urlap div-ben legyen egy urlap, amivel ilyen adatokat tudunk a táblázatba beletenni. A táblázat fejlécére kattintva rendezzük a táblázatot név szerint. Tudjunk törölni a táblázatból egy sort. Legyen szűrőmező, ami segítségével név szerint tudjuk szűrni az adatokat.

## Függvények

1. *** kartyaLetrehoz(lista) *** -> txt - lista alapján készít html táblázatot kódból, visszaadja az elkészült html szöveget.

2. *** megjelenit(txt) *** - megjeleníti a paraméterben kapott szöveget egy adott html elemben.

3. *** rendez(lista) *** -> rendezettLista - megrendezi a listát egy adott paraméter szerint, a megrendezett listát újra megjeleníti, megrendezett listát visszaadja.
Akkor fut le amikor rákattintunk hogy mire akarunk szűrni és a Szűrés gombra nyomunk.

4. *** szures(lista, keresoSzoveg) *** -> szurtLista - akkor fog lefutni, ha a szűrő mezőben változás történik - (keyup) - a listában a név mezőben keres egyezéseket és szűr ez alapján - filter.

5. *** kosar(lista, index, kosarLista) *** -> kosar - ez a lista az adott kártyát fogja a kosár listába tenni, ha rányomunk, hogy kosárba helyezzük a terméket.

6. *** termekekLetrehoz(termekLista, index) *** - kártya alapján készít html táblázat kódot, és visszaadja az elkészült html szöveget.

6. *** termekekMegjelenít(termekLista) *** - megjeleníti kártyába kapott szöveget egy adott html elemben.

7. *** torol(lista, index) *** - törli a lista adott sorát, minden sor mellett lesz egy kuka gomb, amivel megkapjuk az adott sor indexét es meghívódik a töröl függvény.

8. *** torolEsemeny() *** - kitörli az adott kártyát a kosárból - rányomunk a töröl gombra.



1. adat.js


export const keszletLISTA = [

    { gepkocsitipus: "Típus_1",
      evjarat: 2024,
      uzemanyag: true
    },
    { gepkocsitipus: "Típus_2",
      evjarat: 2024,
      uzemanyag: false 
    }
]