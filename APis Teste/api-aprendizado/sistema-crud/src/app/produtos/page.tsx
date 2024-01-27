'use client'
import '../api/teste'
import React from 'react'
import { useEffect, useState } from 'react';

export default function Produtos() {
    const [produtos, getProdutos] = useState([]);
    const [inserirprodutos, insProdutos] = useState({nomeproduto: '', tipoprodutos: '', categoriaproduto: '', observacaoproduto: ''})

    console.log(produtos)

    useEffect(() => {
        fetch('http://localhost:3000/produtos')
            .then(response => response.json())
            .then(data => getProdutos(data));
        console.log(produtos)
    }, []);
    
    const atualizaEstado = (e) => {
        insProdutos({
            ...inserirprodutos,
            [e.target.name]: e.target.value
        })
    }

    const postProdutos = () => {
        fetch('http://localhost:3000/produtos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inserirprodutos),
            })
            .then(response => response.json())
            .then(data => {
                getProdutos([...produtos, data])
                insProdutos({nomeproduto: '', tipoprodutos: '', categoriaproduto: '', observacaoproduto: ''})
            })

    }



    return (
        <div>
            <h2 className='text-3xl'>Página Produtos</h2>
            <form onSubmit={postProdutos}>
                <label htmlFor="nomeproduto">Nome: </label>
                <input type="text" name='nomeproduto' value={inserirprodutos.nomeproduto} onChange={atualizaEstado} className='text-black' />
                <label htmlFor="tipoprodutos">Tipo: </label>
                <input type="text" name='tipoprodutos' value={inserirprodutos.tipoprodutos} onChange={atualizaEstado} className='text-black' />
                <label htmlFor="categoriaproduto">Categoria: </label>
                <input type="text" name='categoriaproduto' value={inserirprodutos.categoriaproduto} onChange={atualizaEstado} className='text-black' />
                <label htmlFor="observacaoproduto">Observacao: </label>
                <input type="text" name='observacaoproduto' value={inserirprodutos.observacaoproduto} onChange={atualizaEstado} className='text-black' />

                <input type="submit" value="Enviar" className='bg-gray-100 text-black ml-2 cursor-pointer'/>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Categoria</th>
                        <th>Observação</th>
                        {/* Adicione mais cabeçalhos de coluna conforme necessário */}
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nomeproduto}</td>
                            <td>{produto.tipoprodutos}</td>
                            <td>{produto.categoriaproduto}</td>
                            <td>{produto.observacaoproduto}</td>
                            {/* Adicione mais células de dados conforme necessário */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}