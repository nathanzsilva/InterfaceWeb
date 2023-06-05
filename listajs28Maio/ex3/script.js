function Calcular() {
    var numero = document.getElementById("numero").value
    var resultado = document.getElementById("resultadotext")
    resultado.innerText = ""

    if (numero > 1)
        resultado.innerText = "conteúdo da variável é maior que 1"
    if (numero > 1 && numero < 6)
        resultado.innerText += " e "
    if (numero < 6)
        resultado.innerText += " conteúdo da variável é menor que 6"

}
