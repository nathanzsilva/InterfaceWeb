let tamanhodapiramede = 151564189749448474898748748784874 //TAMANHO DA PIRAMIDE

let piramide = '';
for (let c = 0; c <= tamanhodapiramede; c++) {
    piramide += "*";
    let espacamento = '';


    for (let n = 0; n <= Math.ceil((tamanhodapiramede - c) / 2); n++) {
        espacamento += "-";
    }
    console.log(espacamento + piramide)
}