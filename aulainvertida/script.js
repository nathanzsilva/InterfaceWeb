window.onscroll = () => {
  if (document.documentElement.scrollTop > window.innerHeight) {
    console.log(window.innerHeight)
    if (document.querySelector("#cadastro") != "")
      document.getElementById("cadastro").style.display = "none"

  }
  if (document.documentElement.scrollTop > 50 || document.querySelector("#cadastro") == "") {
    document.getElementById("navbar").style.visibility = 'visible'
    document.getElementById("navbar").style.position = 'fixed'
    document.getElementById("navbar").style.animation = 'none'
    document.getElementById("navbar").style.animation = 'moveToDown 700ms ease-out'
    console.log("aaaaa")
  }
  else if (document.documentElement.scrollTop < 50 && document.getElementById("cadastro").style.display != "none") {
    console.log("bbbbbbbbb")
    document.getElementById("navbar").style.animation = 'none'
    document.getElementById("navbar").style.animation = 'sumirparacima 700ms ease-out'

    navbar.addEventListener("animationend", (event) => {
      if (event.animationName == "sumirparacima")
        document.getElementById("navbar").style.visibility = 'hidden'

    })
  }
}
var casasJson = [
  {
    onClick: "verCasa(this)",
    cover: "./img/img1.png",
    titulo: "Santos, Brasil",
    preco: "R$800 noite"
  },
  {
    onClick: "",
    cover: "./img/img2.png",
    titulo: "Serra Negra, Brasil",
    preco: "R$750 noite"
  },
  {
    onClick: "",
    cover: "./img/img3.png",
    titulo: "Ubatuba, Brasil",
    preco: "R$650 noite"
  },
  {
    onClick: "verCasa(this)",
    cover: "./img/img1.png",
    titulo: "Santos, Brasil",
    preco: "R$800 noite"
  },
  {
    onClick: "",
    cover: "./img/img2.png",
    titulo: "Serra Negra, Brasil",
    preco: "R$750 noite"
  },
  {
    onClick: "",
    cover: "./img/img3.png",
    titulo: "Ubatuba, Brasil",
    preco: "R$650 noite"
  },
  {
    onClick: "verCasa(this)",
    cover: "./img/img1.png",
    titulo: "Santos, Brasil",
    preco: "R$800 noite"
  },
  {
    onClick: "",
    cover: "./img/img2.png",
    titulo: "Serra Negra, Brasil",
    preco: "R$750 noite"
  },
]
let locais = ""
for (let i = 0; i < casasJson.length; i++) {
  var onClick = casasJson[i].onClick == '' ? '' : `onclick="${casasJson[i].onClick}"`
  console.log(onClick)
  locais += "<div " + onClick + ">" +
    "<img src='" + casasJson[i].cover + "' alt=''>" +
    "<h3>" + casasJson[i].titulo + "</h3>" +
    "<p>" + casasJson[i].preco + "</p>" +
    "</div > "
}
document.getElementById("locais").innerHTML = locais

function abrirfiltro1() {
  document.getElementById("filtrocidade").style.display = "flex"


}
function fecharfiltro1(){
  document.getElementById("filtrocidade").style.display = "none"

}
function pesquisar(request) {
  if (request.value != '') {
    let casasJsonpesquisado = casasJson.filter((titulo) => {
      return titulo.titulo.toLowerCase().includes(request.value.toLowerCase())
    })
    let locais = ""
    for (let i = 0; i < casasJsonpesquisado.length; i++) {
      var onClick = casasJsonpesquisado[i].onClick == '' ? '' : `onclick="${casasJsonpesquisado[i].onClick}"`
      console.log(onClick)
      locais += "<div " + onClick + ">" +
        "<img src='" + casasJsonpesquisado[i].cover + "' alt=''>" +
        "<h3>" + casasJsonpesquisado[i].titulo + "</h3>" +
        "<p>" + casasJsonpesquisado[i].preco + "</p>" +
        "</div > "
    }
    if (locais != "")
      document.getElementById("locais").innerHTML = locais
    else
      alert("Não foi encontrado resultados para sua pesquisa")
  }
  else {
    let locais = ""
    for (let i = 0; i < casasJson.length; i++) {
      var onClick = casasJson[i].onClick == '' ? '' : `onclick="${casasJson[i].onClick}"`
      console.log(onClick)
      locais += "<div " + onClick + ">" +
        "<img src='" + casasJson[i].cover + "' alt=''>" +
        "<h3>" + casasJson[i].titulo + "</h3>" +
        "<p>" + casasJson[i].preco + "</p>" +
        "</div > "
    }
    document.getElementById("locais").innerHTML = locais

  }

}
function ModalCadastro() {
  document.getElementById("fundoCadastro").style.display = 'block'
  document.getElementById("modalCadastro").style.display = 'flex'
  document.getElementById("trocar").style.display = 'block'
  document.getElementById("fundoCadastro").addEventListener("click", () => {
    document.getElementById("fundoCadastro").style.display = 'none'
    document.getElementById("modalCadastro").style.display = 'none'
    document.getElementById("modalLogin").style.display = "none"
    document.getElementById("trocar").style.display = 'none'

  })
}
function Trocarlogin() {
  if (document.getElementById("modalCadastro").style.display == "none") {
    document.getElementById("modalCadastro").style.display = "flex"
    document.getElementById("modalLogin").style.display = "none"
    console.log("trocou")
  }
  else {
    document.getElementById("modalCadastro").style.display = "none"
    document.getElementById("modalLogin").style.display = "flex"
    console.log("trocou2")
  }

}
function IrParaHome() {
  window.location.href = './index.html'
}
function Irparapagamento(){
  window.location.href = './pagamento.html'
}
function IrParaDetalhes(){
  window.location.href = './casa.html'
}
