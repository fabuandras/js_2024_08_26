export function kartyakLetrehoz(lista) {
  let txt = ``;
  lista.forEach((elem, index) => {
    txt += `
    <div class="card bg-dark" style="width:300px">
                        <img class="card-img-top" src="${elem.kep}" alt="" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title text-white">${elem.nev}</h4>
                            <p class="card-text alapar">${elem.ar} Ft</p>
                            <h6 class="card-title text-white h6">Részletek:</h6>
                            <p class="card-text text-white termekinformacio">${elem.termekinfo}</p>
                            <div class="text-right pt-3">
                                <button type="button" id="${index}" class="kosar btn btn-outline-light fw-bold rounded-3 text-uppercase"><i
                                        class="fa fa-shopping-cart"></i> Kosárba</button>
                            </div>
                        </div>
                    </div>
    `
  });

  return txt;
}

export function megjelenit(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}


export function tablazatLetrehozadminhoz(lista) {
  let txt2 = `<table class="table table-dark">
    <thead>
      <tr>
        <th>Termék</th>
        <th>Termék neve</th>
        <th>Termék ára</th>
        <th>Termék mennyiség (db)</th>
      </tr>
    </thead>
    <tbody>`;
  lista.forEach((elem) => {
    txt2 += `
    <div class="container mt-3">
      <tr>
        <td><img class="card-img-top" src="${elem.kep}" alt="" style="width:10%"></td>
        <td>${elem.nev}</td>
        <td>${elem.ar}</td>
        <td>${elem.db} db<td>
      </tr>
    `
  });

  txt2 += `</tbody> </table> </div>`
  return txt2;
}

export function megjelenitAdminhoz(txt2) {
  const ELEM = $(".adatokAdmin");
  ELEM.html(txt2);
}