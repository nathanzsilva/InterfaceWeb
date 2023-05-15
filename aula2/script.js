function CalcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    
    let media = (nota1 + nota2) / 2

    const resultado = document.getElementById("resultado")

console.log(resultado)

    const presultado = document.createElement("h2")
    presultado.innerText = `A média é igual a: ${media}`

    resultado.appendChild(presultado)
}