'use client'
import React, { useEffect, useState } from 'react';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const [inserirprodutos, setInserirProdutos] = useState({nomeproduto: '', tipoprodutos: '', categoriaproduto: '', observacaoproduto: ''});

    useEffect(() => {
        fetch('http://localhost:3000/produtos')
            .then(response => response.json())
            .then(data => setProdutos(data));
    }, []);

    const handleChange = (e) => {
        setInserirProdutos({
            ...inserirprodutos,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inserirprodutos),
        })
        .then(response => response.json())
        .then(data => {
            setProdutos([...produtos, data]);
            setInserirProdutos({nomeproduto: '', tipoprodutos: '', categoriaproduto: '', observacaoproduto: ''});
        });
    }

    return (
        <div>
            <h2 className='text-3xl'>Página Produtos</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nomeproduto">Nome: </label>
                <input type="text" name='nomeproduto' value={inserirprodutos.nomeproduto} onChange={handleChange} className='text-black' />
                <label htmlFor="tipoprodutos">Tipo: </label>
                <input type="text" name='tipoprodutos' value={inserirprodutos.tipoprodutos} onChange={handleChange} className='text-black' />
                <label htmlFor="categoriaproduto">Categoria: </label>
                <input type="text" name='categoriaproduto' value={inserirprodutos.categoriaproduto} onChange={handleChange} className='text-black' />
                <label htmlFor="observacaoproduto">Observacao: </label>
                <input type="text" name='observacaoproduto' value={inserirprodutos.observacaoproduto} onChange={handleChange} className='text-black' />

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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
