'use client'; // Adicione essa linha no topo do arquivo

import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaTrash } from 'react-icons/fa';
import { MdEditSquare, MdGroups } from 'react-icons/md';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import { IoIosAdd } from 'react-icons/io';
import { GiOfficeChair } from 'react-icons/gi';
import axios from 'axios';
//import { cookies } from 'next/headers';

const ClientComponent = () => {
    const [dados, setDados] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [dadosFiltrados, setDadosFiltrados] = useState([]);
    const [ordenacao, setOrdenacao] = useState({ coluna: null, ascendente: true });
    const [isOpen, setIsOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [nome, setNome] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [atualPage, setAtualPage] = useState(1);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [sistemaId, setSistemaId] = useState(null);
    const [editNome, setEditNome] = useState('');
    const [editDepartamento, setEditDepartamento] = useState('');



    const token = document.cookie.split('; ').find(row => row.startsWith('jwt=')).split('=')[1];

    useEffect(() => {
        axios.get('http://localhost:5001/api/sistema', {
            headers: {
                "authorization": `${token}`
            }
        })
            .then(response => {
                setDados(response.data);
                setDadosFiltrados(response.data);
                console.log("Deu certo")
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
                alert('Erro ao buscar dados da API: ' + error.message);
            });
    }, []);

    const btnAlterar = (sistema) => {
        setSistemaId(sistema._id)
        setEditNome(sistema.nome);
        setEditDepartamento(sistema.descricao);
        setIsEditOpen(true);
    };

    const btnDeletar = (id) => {
        axios.delete(`http://localhost:5001/api/sistema/${id}`, {
            headers: {
                "authorization": `${token}`
            }
        })
            .then(response => {
                setDadosFiltrados(prevData => prevData.filter(item => item._id !== id));
                alert(`Item com ID ${id} deletado com sucesso!`);
                //setIsOpen(false)
                setItemToDelete(null)
            })
            .catch(error => {
                console.error(`Erro ao deletar item com ID ${id}:`, error);
                alert(`Erro ao deletar item com ID ${id}: ` + error.message);
            });
        //setIsOpen(false);
    };

    const btnDelete = (id) => {
        setItemToDelete(id);
        //setItemToDelete(null)
        //setIsOpen(true);
    };

    const handleFiltroChange = (event) => {
        const valorFiltro = event.target.value;
        setFiltro(valorFiltro);
        const dadosFiltrados = dados.filter(item =>
            item.nome.toLowerCase().includes(valorFiltro.toLowerCase()) ||
            item.descricao.toLowerCase().includes(valorFiltro.toLowerCase())
        );
        setDadosFiltrados(dadosFiltrados);
    };

    const funcOrdenacao = (coluna) => {
        setOrdenacao(prevState => ({
            coluna,
            ascendente: prevState.coluna === coluna ? !prevState.ascendente : true
        }));

        const ordenarPor = (a, b) => {
            if (a[coluna] < b[coluna]) return -1;
            if (a[coluna] > b[coluna]) return 1;
            return 0;
        };

        const dadosOrdenados = [...dadosFiltrados].sort((a, b) => {
            const multiplicador = ordenacao.ascendente ? 1 : -1;
            return multiplicador * ordenarPor(a, b);
        });

        setDadosFiltrados(dadosOrdenados);
    };

    const EnviarFormulario = async (e) => {
        e.preventDefault();

        const sistemaData = {
            nome,
            descricao: departamento
        };

        try {
            const response = await axios.post('http://localhost:5001/api/sistema', sistemaData, {
                headers: {
                    "authorization": `${token}`
                }
            });

            if (response.status === 201) {
                const result = response.data;
                setDados([...dados, result]);
                setDadosFiltrados([...dados, result]);
                setIsOpen(false);
                setNome('');
                setDepartamento('');
                alert('Cadastro realizado com sucesso!');
                window.location.reload();
            } else {
                alert('Erro ao cadastrar. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar. Por favor, tente novamente.');
        }
    };

    const AlterarFormulario = async (e) => {
        e.preventDefault();

        const sistemaData = {
            nome: editNome,
            descricao: editDepartamento
        };

        try {
            const response = await axios.put(`http://localhost:5001/api/sistema/${sistemaId}`, sistemaData, {
                headers: {
                    "authorization": `${token}`
                }
            });

            if (response.status === 201) {
                const result = response.data;
                setDados(prevData => prevData.map(item => (item._id === sistemaId ? { ...item, ...result } : item)));
                setDadosFiltrados(prevData => prevData.map(item => (item._id === sistemaId ? { ...item, ...result } : item)));
                setIsEditOpen(false);
                setEditNome('');
                setEditDepartamento('');
                alert('Cadastro realizado com sucesso!');
                window.location.reload();
            } else {
                alert('Erro ao cadastrar. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar. Por favor, tente novamente.');
        }
    };

    const itemsPorPage = 10;
    const totalPages = Math.ceil(dadosFiltrados.length / itemsPorPage);

    const getPaginatedData = () => {
        const inicial = (atualPage - 1) * itemsPorPage;
        const final = inicial + itemsPorPage;
        return dadosFiltrados.slice(inicial, final);
    };

    const proximaPage = () => {
        setAtualPage(anteriorPage => Math.min(anteriorPage + 1, totalPages));
    };

    const anteriorPage = () => {
        setAtualPage(anteriorPage => Math.max(anteriorPage - 1, 1));
    };

    const numeroLinha = (index) => {
        return (atualPage - 1) * itemsPorPage + index + 1;
    };

    return (
        <div>
            <div className="p-5">
                <div className="flex justify-between mb-4">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Buscar Sistema..."
                            className="border pl-2 pr-2 rounded mr-2"
                            value={filtro}
                            onChange={handleFiltroChange}
                        />
                        <button className="bg-teal-500 text-white p-4 rounded mr-2" title="Ordenar por Nome" onClick={() => funcOrdenacao('nome')}>
                            <FaArrowDown />
                        </button>
                        <button className="bg-teal-500 text-white p-4 rounded" title="Ordenar por Departamento" onClick={() => funcOrdenacao('descricao')}>
                            <MdGroups />
                        </button>
                    </div>
                    <div className="flex bg-teal-500 text-white p-0 rounded items-center justify-center pr-2 pl-1 cursor-pointer"
                        onClick={() => setIsOpen(true)}>
                        <div>
                            <IoIosAdd />
                        </div>
                        <div>
                            Cadastrar
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">#</th>
                                <th className="py-2 px-4 border-b">Nome</th>
                                <th className="py-2 px-4 border-b">Descrição</th>
                                <th className="py-2 px-4 border-b">Data Criação</th>
                                <th className="py-2 px-4 border-b">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getPaginatedData().map((sistema, index) => (
                                <tr key={sistema._id}>
                                    <td className="py-2 px-4 border-b">{numeroLinha(index)}</td>
                                    <td className="py-2 px-4 border-b">{sistema.nome}</td>
                                    <td className="py-2 px-4 border-b">{sistema.descricao}</td>
                                    <td className="py-2 px-4 border-b">{sistema.dataCriacao}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-blue-500 text-white p-2 rounded mr-2" title="Editar" onClick={() => btnAlterar(sistema._id)}>
                                            <MdEditSquare />
                                        </button>
                                        <button className="bg-red-500 text-white p-2 rounded" title="Deletar" onClick={() => btnDelete(sistema._id)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <button
                        className="bg-teal-500 text-white p-2 rounded"
                        onClick={anteriorPage}
                        disabled={atualPage === 1}
                    >
                        <TbPlayerTrackPrevFilled />
                    </button>
                    <span className="self-center pr-3 pl-3">
                        {atualPage} de {totalPages}
                    </span>
                    <button
                        className="bg-teal-500 text-white p-2 rounded"
                        onClick={proximaPage}
                        disabled={atualPage === totalPages}
                    >
                        <TbPlayerTrackNextFilled />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-xl mb-4">Cadastrar Sistema</h2>
                        <form onSubmit={EnviarFormulario}>
                            <div className="mb-4">
                                <label htmlFor="nome" className="block font-bold mb-2">Nome</label>
                                <input
                                    id="nome"
                                    type="text"
                                    className="border p-2 rounded w-full"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="descricao" className="block font-bold mb-2">Descrição</label>
                                <input
                                    id="descricao"
                                    type="text"
                                    className="border p-2 rounded w-full"
                                    value={departamento}
                                    onChange={e => setDepartamento(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white p-2 rounded"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-teal-500 text-white p-2 rounded"
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {itemToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-xl mb-4">Confirmação</h2>
                        <p>Tem certeza de que deseja excluir este item?</p>
                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-gray-500 text-white p-2 rounded"
                                onClick={() => setItemToDelete(null)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-red-500 text-white p-2 rounded"
                                onClick={() => btnDeletar(itemToDelete)}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isEditOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-xl mb-4">Editar Sistema</h2>
                        <form onSubmit={AlterarFormulario}>
                            <div className="mb-4">
                                <label htmlFor="nome" className="block font-bold mb-2">Nome</label>
                                <input
                                    id="nome"
                                    type="text"
                                    className="border p-2 rounded w-full"
                                    value={editNome}
                                    onChange={e => setEditNome(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="descricao" className="block font-bold mb-2">Descrição</label>
                                <input
                                    id="descricao"
                                    type="text"
                                    className="border p-2 rounded w-full"
                                    value={editDepartamento}
                                    onChange={e => setEditDepartamento(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white p-2 rounded"
                                    onClick={() => setIsEditOpen(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-teal-500 text-white p-2 rounded"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ClientComponent;

