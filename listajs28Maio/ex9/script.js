function Calcular() {
    let resultado = document.getElementById("resultado")
    let sim = 0

    if (document.getElementById("sim").checked)
        sim++
    if (document.getElementById("sim1").checked)
        sim++
    if (document.getElementById("sim2").checked)
        sim++
    if (document.getElementById("sim3").checked)
        sim++
    if (document.getElementById("sim4").checked)
        sim++

    if (sim == 2)
        resultado.innerText = "Suspeito"
    else if (sim >= 3 && sim <= 4)
        resultado.innerText = "Cúmplice"
    else if (sim >= 5)
        resultado.innerText = "Culpado"
    else
        resultado.innerText = "Inocente"



}
