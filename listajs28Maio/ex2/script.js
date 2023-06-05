function Calcular() {
    var numero = document.getElementById("numero").value
    var resultado = document.getElementById("resultadotext")
    resultado.innerText = ""

    if (numero > 1 && numero < 6)
        resultado.innerText = " conteúdo da variável está entre 1 e 6"
    else
        resultado.innerText = " conteúdo da variável não está entre 1 e 6"
}
