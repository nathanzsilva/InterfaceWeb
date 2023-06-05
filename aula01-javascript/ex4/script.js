verificar(8)

function verificar(num) {

    if (num == null) {
        var num = window.document.getElementById('num').value
    }
    var div = window.document.getElementById('div2')


    div.innerHTML = null

    for (var c = 1; c <= 10; c++) {
        div.innerHTML += `<p>${num} X ${c} = ${num * c}</p>`
    }
}