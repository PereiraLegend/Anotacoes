//const { stringify } = require("querystring");
//const { response } = require("../../Api-Backend/src/app");

const url = 'http://localhost:3000/produtos';
const produtoBody = document.getElementById('produtoBody');
const formularioProduto = document.getElementById('formularioProduto');
//const axios = require('axios')

document.addEventListener('DOMContentLoaded', function () {
  carregarProdutos();
});

function carregarProdutos() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      exibirProdutos(data);
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });
}

function exibirProdutos(produtos) {
  produtoBody.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

  produtos.forEach(function (produto) {
    const row = criarLinhaProduto(produto);
    produtoBody.appendChild(row);
  });
}

function criarLinhaProduto(produto) {
  const { id, nomeproduto, tipoprodutos, categoriaproduto, observacaoproduto } = produto;

  const row = document.createElement('tr');
  row.innerHTML = `
        <td>${id}</td>
        <td>${nomeproduto}</td>
        <td>${tipoprodutos}</td>
        <td>${categoriaproduto}</td>
        <td>${observacaoproduto}</td>
        <td>
          <button onclick="abrirModalEditar(${id})">Editar</button>
          <button onclick="excluirProduto(${id})">Excluir</button>
        </td>
      `;

  return row;
}



formularioProduto.addEventListener('submit', function (event) {
  event.preventDefault();

  const nomeProduto = document.getElementById('nomeProduto').value;
  const tipoProduto = document.getElementById('tipoProduto').value;
  const categoriaProduto = document.getElementById('categoriaProduto').value;
  const observacaoProduto = document.getElementById('observacaoProduto').value;

  const novoProduto = {
    id: Math.floor(Math.random() * 1000), // Gere um ID único (isso é apenas para exemplo)
    nomeproduto: nomeProduto,
    tipoprodutos: tipoProduto,
    categoriaproduto: categoriaProduto,
    observacaoproduto: observacaoProduto
  };

  function adicionarProduto(produto) {
    const row = criarLinhaProduto(produto);
    // Adicionando produtos no bd
    console.log("Itens: ", produto)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    })
      //.then(response => response.JSON())
      .then(data => {
        console.log('Os dados foram enviados com sucesso!: ', data)
      })
      .catch(error => {
        console.log('Deu erro em: ', error)
      })

    produtoBody.appendChild(row);
  }
  adicionarProduto(novoProduto);

  // Adicione lógica aqui para enviar o novo produto para o backend usando fetch ou outra abordagem.

  // Limpe o formulário após adicionar o produto
  formularioProduto.reset();
  location.reload()
});

function abrirModalEditar(id) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('editartxt').innerText = `${id}`
}

function fecharModalEditar() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}


function editarProduto() {
  const idE = document.querySelector('#editartxt').innerText

  const editarProd = {
    id: idE,
    nomeproduto: document.getElementById("nomeEditar").value,
    tipoprodutos: document.getElementById("tipoEditar").value,
    categoriaproduto: document.getElementById("categoriaEditar").value,
    observacaoproduto: document.getElementById("observacaoEditar").value
  }

  fetch(`${url}/${idE}`,{
    method: 'PUT',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(editarProd),
  })
  .then(data => {
    console.log("Produto Editado: ", data)
  })
  .catch(error => {
    console.log("Deu erro na edição do produto: ", error)
  })

  // Lógica para edição do produto com o ID fornecido
  
  //alert(`Produto ${idE} Editado`)
  fecharModalEditar()
  console.log('Editado o produto com ID:', idE);
  location.reload()
}



function excluirProduto(id) {
  // Lógica para exclusão do produto com o ID fornecido
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao excluir produto com ID ${id}. Status: ${response.status}`);
      }
      console.log('Deu certo Excluir')
    })
    .catch(error => {
      console.log("Deu Erro ao excluir", error)
    })

  console.log('Excluir produto com ID:', id);
  location.reload()
}