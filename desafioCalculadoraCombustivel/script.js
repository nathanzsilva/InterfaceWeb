function Calcular() {
    var gasolina = document.getElementById("gasolina").value
    var etanol = document.getElementById("etanol").value
    var imagem = document.getElementById("resultadoimg")
    var textoresultado = document.getElementById("resultadotext")

    if(gasolina == "" || etanol == ""){
        alert("Preencha os campos")
        return;
    }
    if(gasolina * 0.7 > etanol){
        imagem.src = "./img/etanol.jpg"
        textoresultado.innerText = "Etanol vale mais"
    }
    else{
        imagem.src = "./img/gasolina.jpg"
        textoresultado.innerText = "Gasolina vale mais"
    }
}
function Limpar() {
    var gasolina = document.getElementById("gasolina").value = ""
    var etanol = document.getElementById("etanol").value = ""
    var imagem = document.getElementById("resultadoimg").src = "./img/neutro.png"
    var textoresultado = document.getElementById("resultadotext").innerText = ""
}