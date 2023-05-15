function autenticar(){
const login = document.getElementById("usuario").value
const senha = document.getElementById("senha").value
const resultado = document.getElementById("resultado")
const modal = document.getElementById("modal")


if(login == "nathan" && senha == "123456"){
    resultado.innerText = "Login Autenticado"
    modal.style.background = 'greenyellow'

}
else{
    resultado.innerText = "Login Inválido"
    modal.style.background = 'yellow'

}
}