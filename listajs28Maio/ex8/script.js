function Calcular() {
    var numero = document.getElementById("numero").value

    if (numero >= 5 && numero <= 7)
        alert("Infantil A ")
    else if (numero >= 8 && numero <= 11)
        alert("Infantil B")
    else if (numero >= 12 && numero <= 13)
        alert("Juvenil A ")
    else if (numero >= 14 && numero <= 17)
        alert("Juvenil B ")
    else if (numero >= 18 && numero <= 60)
        alert("Adulto ")
    else if (numero > 60)
        alert("Idoso")
    else
        alert("Categoria Inválida para menores de 5 anos")
}
