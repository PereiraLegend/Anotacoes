const tbody = document.querySelector('tbody')

const adicionarFormulario = document.querySelector('.formulario-produtos')

const Produtos = async () => {
    try {
        const resposta = await fetch('http://localhost:3000/produtos') // Puxo o endpoint para procurar uma resposta
        const dados = await resposta.json()
        console.log('Os dados são: ',dados)
        return dados
    } catch (error) {
        return console.error('Deu erro no endpoint: ', error)
    }
}

const adicionarTarefas = async () => {
    alert('teste')
}


// Gerando elementos html para a tabela
const criarElementos = (tag, innerText = '', innerHTML = '') => {
    const elemento = document.createElement(tag)
    if (innerText) {
        elemento.innerText = innerText
    }
    if (innerHTML) {
        elemento.innerHTML = innerHTML
    }
    return elemento
}

const produto = {
    id: 10,
    nomeproduto: 'nomeTeste',
    tipoprodutos: 'tipoTeste',
    categoriaproduto: 'categoriaTeste',
    observacaoproduto: 'observacaoTeste'
}

const criarLinha = (produto) => {
    const { id, nomeproduto, tipoprodutos, categoriaproduto, observacaoproduto } = produto

    const tr = document.createElement('tr')

    const tdid = criarElementos('td', id)
    const tdnomeprod = criarElementos('td', nomeproduto)
    const tdtipoprod = criarElementos('td', tipoprodutos)
    const tdcategoriaprod = criarElementos('td', categoriaproduto)
    const tdobservacaoproduto = criarElementos('td', observacaoproduto)
    const tdacoes = criarElementos('td')

    const tdeditarbtn = criarElementos('button','','<span class="material-symbols-outlined">edit</span>')
    const tdexcluirbtn = criarElementos('button','','<span class="material-symbols-outlined">delete</span>')
    tdacoes.appendChild(tdeditarbtn)
    tdacoes.appendChild(tdexcluirbtn)

    tr.appendChild(tdid)
    tr.appendChild(tdnomeprod)
    tr.appendChild(tdtipoprod)
    tr.appendChild(tdcategoriaprod)
    tr.appendChild(tdobservacaoproduto)
    tr.appendChild(tdacoes)

    //tr.appendChild(tdeditarbtn)
    //tr.appendChild(tdexcluirbtn)

    //tbody.appendChild(tr)
    return tr
}

const carregarProdutos = async () => { // Aqui percorre os produtos pelo banco de dados, os lê e cria um por um 
    const produtos = await Produtos()

    produtos.forEach((produto) => {
        const tr = criarLinha(produto)
        tbody.appendChild(tr)
    })
}

adicionarFormulario.addEventListener('submit', adicionarTarefas) //Quando o formulário for enviado aqui será escutado e executará a ação de adicionar tarefas

carregarProdutos()
//console.log(criarElementos('main'))
