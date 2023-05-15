function verificar() {

    var nome = window.document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var div = window.document.getElementById('div2')

    div.innerHTML = `<p>Seu nome completo é ${nome} ${sobrenome}</p>`
}