// var form = document.querySelector("#form");
// var table = document.querySelector("#table");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const prod = document.querySelector("#inp_produ").value;
//     console.log(prod)
//     if (prod == '') {
//         alert("Preencha o nome do produto, por favor")
//         return;
//     }
//     const preco = document.querySelector("#inp_preco").value;
//     if (preco  == '') {
//         alert("Preencha o preco do produto, por favor")
//         return;
//     }


//     const newRow = table.insertRow(1);
//     const newCell0 = newRow.insertCell(0);
//     const newCell1 = newRow.insertCell(1);
//     const newCell2 = newRow.insertCell(2);

//     let prodText = document.createTextNode(prod);
//     let precoText = document.createTextNode(preco);
//     let action = document.createElement("button");
//     action.innerText = "Remover";
//     action.setAttribute("onclick", "remover(this.parentNode.parentNode)")


//     newCell0.appendChild(prodText);
//     newCell1.appendChild(precoText);
//     newCell2.appendChild(action);
// })

// function remover(linha){
//     linha.parentNode.removeChild(linha)
// }

const produtos = [];

function addprodutos() {
    const prod = document.querySelector("#inp_produ").value;
    const preco = document.querySelector("#inp_preco").value;
    if (!prod && !preco) {
        alert("Preencha os campos de produto, por favor");
        return;
    }
    const produto = {
        nome: prod,
        preco: preco
    };
    produtos.push(produto);

    document.querySelector("#inp_produ").value = '';
    document.querySelector("#inp_preco").value = '';
}