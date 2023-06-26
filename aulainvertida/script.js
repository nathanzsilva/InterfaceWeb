
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

// var lista = [100, 200, 600]

// lista.push(300)
// var soma = 0
// for (var i = 0; i < lista.length; i++){
//   soma += lista[i]
// }



var casasJson = [
  {
    onClick: "verCasa(this)",
    cover: "./img/img1.png",
    titulo: "Santos, Brasil",
    preco: "R$800 noite"
  },
  {
    onClick: "",
    cover: "./img/serra.png",
    titulo: "Serra Negra, Brasil",
    preco: "R$750 noite"
  },
  {
    onClick: "",
    cover: "./img/ubatuba.jpeg",
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
function fecharfiltro1() {
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
function Irparapagamento() {
  let datain = document.getElementById("resultadocheckin").innerText
  let dataout = document.getElementById("resultadocheckout").innerText
  let total = Number(document.getElementById("resultado").innerText.replace("R$", '').replace(",00", ""))
  let hospedes = Number(document.getElementById("hospedes").innerText)
  let limpeza = Number(document.getElementById("taxalimp").innerText.replace("R$", '').replace(",00", ""))

  if (datain != "" || dataout != "") {
    let pagamentojson = {
      datain: datain,
      dataout: dataout,
      total: total,
      hospedes: hospedes,
      limpeza: limpeza
    }

    window.localStorage.setItem("pagamento", JSON.stringify(pagamentojson))

    window.location.href = './pagamento.html'
  }
  else
    alert("Por favor, preencha os dias de Check-in e Checkout")
}
function IrParaDetalhes() {
  window.location.href = './casa.html'
}

function mudarcor(id){
  document.getElementById(id).style.color = 'red'
}

function data(request) {
  let id = "calendario1_" + request.innerText
  console.log(id)

  document.getElementById("resultadocheckin").innerText = `${request.innerText}/06/2023`
  if (document.getElementById("resultadocheckout").innerText != '') {
    let datain = Number(document.getElementById("resultadocheckin").innerText.split("/")[0])
    let dataout = Number(document.getElementById("resultadocheckout").innerText.split("/")[0])
    if (datain >= dataout) {
      alert("A data de Check-in não pode ser maior do que a data de Checkout")
      document.getElementById("resultadocheckout").innerText = ``
    }
    else {
      let dias = dataout - datain
      let limpeza = document.getElementById("taxalimp").innerText.replace("R$", '').replace(",00", "")
      document.getElementById("resultado").innerText = `R$${dias * 650 + Number(limpeza)},00`
      mudarcor(id)
      document.getElementById(id).classList.add = 'red'

    }
  }
}
function data2(request) {
  
  document.getElementById("resultadocheckout").innerText = `${request.innerText}/06/2023`

  if (document.getElementById("resultadocheckin").innerText != '') {
    let datain = Number(document.getElementById("resultadocheckin").innerText.split("/")[0])
    let dataout = Number(document.getElementById("resultadocheckout").innerText.split("/")[0])
    if (datain >= dataout) {
      alert("A data de Check-in não pode ser maior do que a data de Checkout")
      document.getElementById("resultadocheckout").innerText = ``
    }
    else {
      let dias = dataout - datain
      let limpeza = document.getElementById("taxalimp").innerText.replace("R$", '').replace(",00", "")
      request.style.color = 'red';
      document.getElementById("resultado").innerText = `R$${dias * 650 + Number(limpeza)},00`
    }
  }
}
function fecharCheckn() {
  var calendario = document.getElementById("checkin")
  calendario.style.display = 'none'
}
function CriarCalendario() {
  var calendario = document.getElementById("checkin")
  var calendariotext = ''
  var calendariotext2 = ''
  for (let i = 1; i <= 31; i++) {
    calendariotext += `<li onclick='data(this)' id="calendario1_${i}">${i}</li>`
    // if (i % 7 == 0) {
    //   calendariotext2 += `<ul>${calendariotext}</ul>`
    //   calendariotext = ''
    // }
  }
  calendario.innerHTML = `<ul>${calendariotext}</ul>`
  calendario.style.display = 'flex'
}

function fecharCheckin2() {
  var calendario = document.getElementById("checkin2")
  calendario.style.display = 'none'
}
function CriarCalendario2() {
  var calendario = document.getElementById("checkin2")
  var calendariotext = ''
  var calendariotext2 = ''
  for (let i = 1; i <= 31; i++) {
    calendariotext += `<li onclick='data2(this)' id='calendario2_${i}'>${i}</li>`
    // if (i % 7 == 0) {
    //   calendariotext2 += `<ul>${calendariotext}</ul>`
    //   calendariotext = ''
    // }
  }
  calendario.innerHTML = `<ul>${calendariotext}</ul>`
  calendario.style.display = 'flex'
}
function AbrirHospedes() {
  var modal = document.getElementById("checkin3")
  modal.style.display = 'block'
}
function fecharCheckin3() {
  var modal = document.getElementById("checkin3")
  modal.style.display = 'none'
}
function abrirparcelas() {
  var modal = document.getElementById("checkin5")
  modal.style.display = 'flex'
}
function fecharCheckin5() {
  var modal = document.getElementById("checkin5")
  modal.style.display = 'none'
}
function somarhospedes() {
  document.getElementById("hospedes").innerText = Number(document.getElementById("hospedes").innerText) + 1
  document.getElementById("resultadohospedes").innerText = document.getElementById("hospedes").innerText + " hóspedes"
  document.getElementById("taxalimp").innerText = `R$${Math.round(218.18 + (218.18 * (0.1 * Number(document.getElementById("hospedes").innerText))))},00`
  let datain = Number(document.getElementById("resultadocheckin").innerText.split("/")[0])
  let dataout = Number(document.getElementById("resultadocheckout").innerText.split("/")[0])

  let dias = dataout - datain
  let limpeza = document.getElementById("taxalimp").innerText.replace("R$", '').replace(",00", "")
  document.getElementById("resultado").innerText = `R$${dias * 650 + Number(limpeza)},00`


}
function menarhospedes() {
  if (Number(document.getElementById("hospedes").innerText) - 1 >= 1)
    document.getElementById("hospedes").innerText = Number(document.getElementById("hospedes").innerText) - 1
  document.getElementById("resultadohospedes").innerText = document.getElementById("hospedes").innerText + " hóspedes"
  document.getElementById("taxalimp").innerText = `R$${Math.round(218.18 + (218.18 * (0.1 * Number(document.getElementById("hospedes").innerText))))},00`
  let datain = Number(document.getElementById("resultadocheckin").innerText.split("/")[0])
  let dataout = Number(document.getElementById("resultadocheckout").innerText.split("/")[0])

  let dias = dataout - datain
  let limpeza = document.getElementById("taxalimp").innerText.replace("R$", '').replace(",00", "")
  document.getElementById("resultado").innerText = `R$${dias * 650 + Number(limpeza)},00`
}

function validarparcela() {

  const radioSelecionado = document.querySelector('input[name="radio23"]:checked').value
  let total = pagamento.total
  if (radioSelecionado > 3)
    total = total * 1.2

  document.getElementById("total").innerText = `${radioSelecionado}x ${(total / radioSelecionado).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`

}
function EditarInformacoes() {
  window.location.href = "./casa.html"
}
function Alertar(texto) {
  alert(texto)
}

