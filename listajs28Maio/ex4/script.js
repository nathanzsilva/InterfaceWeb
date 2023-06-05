function Calcular() {
    var numero = document.getElementById("numero").value
    var resultado = document.getElementById("resultadotext")
    resultado.innerText = ""

    if (numero == 6)
        resultado.innerText = "conteúdo da variável é igual a 6"
    else
        resultado.innerText = "conteúdo da variável é diferente a 6"
}
