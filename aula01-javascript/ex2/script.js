function verificar() {

    var nome = window.document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var idade = document.getElementById("idade").value
    var div = window.document.getElementById('div2')

    div.innerHTML = `<p>Seu nome completo é ${nome} ${sobrenome}, e sua idade é de ${idade} anos</p>`
}