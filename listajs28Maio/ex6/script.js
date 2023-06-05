function Calcular() {
    var numero = document.getElementById("numero").value
    var resultado = document.getElementById("resultadotext")
    resultado.innerText = ""

    if (numero >  6)
        resultado.innerText = " conteúdo da variável é maior que 6"
    else
        resultado.innerText = "conteúdo da variável é igual ou menor a 6"
}
