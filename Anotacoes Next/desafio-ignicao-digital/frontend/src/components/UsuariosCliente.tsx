"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsuariosCliente = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('jwt=')).split('=')[1];
        axios.get('http://localhost:5001/api/usuario/me', {
            headers: {
                "authorization": `${token}`
            }
        })
            .then(response => {
                const usuario = response.data;
                console.log("Teste: ", usuario)
                if (usuario || usuario.tags) {
                    setTags(usuario.tags);
                    console.log("Tags carregadas com sucesso");
                } else {
                    console.error('Tags do usuário não foram encontradas.');
                    //alert('Tags do usuário não foram encontradas.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar tags do usuário:', error);
                alert('Erro ao buscar tags do usuário: ' + error.message);
            });
    }, []);

    return (
        <div className='flex flex-col justify-center items-center mt-4 text-xl'>
            <div>As tags atribuídas a você são:</div>
            <div className='flex'>
                {tags && tags.length > 0 ? (
                    tags.map((tag, index) => (
                        <div key={tag}>
                            {tag.join(',')}
                            {index !== tags.length - 1 && ','}
                        </div>
                    ))
                ) : (
                    <div>Nenhuma tag atribuída</div>
                )}
            </div>
        </div>
    );
};

export default UsuariosCliente;
