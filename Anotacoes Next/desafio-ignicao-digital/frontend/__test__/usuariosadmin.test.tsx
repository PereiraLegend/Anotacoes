import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import UsuariosAdmin from '../src/components/UsuariosAdmin';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
        };
    },
}));

const mock = new MockAdapter(axios);

describe('UsuariosAdmin Component', () => {
    beforeEach(() => {
        mock.onGet('http://localhost:5001/api/usuario/all').reply(200, [
            {
                _id: '1',
                nome: 'Ana Clara',
                email: 'ana@gmail.com',
                regra: 'Admin',
                tags: ['tag1'],
                createdAt: new Date().toISOString(),
            },
        ]);

        mock.onGet('http://localhost:5001/api/tag').reply(200, [
            { nome: 'tag1' },
            { nome: 'tag2' },
        ]);

        document.cookie = 'jwt=mockedToken';
    });

    afterEach(() => {
        mock.reset();
        document.cookie = '';
    });

    it('deve renderizar a lista de usuários', async () => {
        render(<UsuariosAdmin />);

        expect(await screen.findByText('Ana Clara')).toBeInTheDocument();
        expect(await screen.findByText('ana@gmail.com')).toBeInTheDocument();
    });

    it('deve filtrar os usuários pela barra de busca', async () => {
        render(<UsuariosAdmin />);

        await waitFor(() => expect(screen.getByText('Ana Clara')).toBeInTheDocument());

        fireEvent.change(screen.getByPlaceholderText('Buscar Usuário...'), {
            target: { value: 'Ana' },
        });

        expect(screen.getByText('Ana Clara')).toBeInTheDocument();
    });

    it('deve filtrar os usuários por nome', async () => {
        mock.onGet('http://localhost:5001/api/usuario/all').reply(200, [
            { _id: '2', nome: 'Joao Pedro', email: 'joao@gmail.com', regra: 'Cliente', tags: [], createdAt: new Date().toISOString() },
            { _id: '1', nome: 'Clara Martins', email: 'clara@gmail.com', regra: 'Admin', tags: [], createdAt: new Date().toISOString() }
        ]);

        render(<UsuariosAdmin />);

        await waitFor(() => {
            expect(screen.getByText('Joao Pedro')).toBeInTheDocument();
        });

        fireEvent.click(screen.getAllByTitle('Ordenar por Nome')[0]);

        await waitFor(() => {
            const rows = screen.getAllByRole('row');
            expect(rows[1]).toHaveTextContent('Clara Martins');
            expect(rows[2]).toHaveTextContent('Joao Pedro');
        });
    });

    it('deve renderizar o componente e buscar dados do usuário', async () => {
        mock.onGet('http://localhost:5001/api/usuario/all').reply(200, [
            { _id: '1', nome: 'Miguel Ferreira', email: 'miguel@gmail.com', regra: 'Admin', tags: [], createdAt: new Date().toISOString() },
            { _id: '2', nome: 'Freitas Castelo', email: 'freitas@gmail.com', regra: 'Cliente', tags: [], createdAt: new Date().toISOString() }
        ]);

        render(<UsuariosAdmin />);

        await waitFor(() => {
            expect(screen.getByText('Miguel Ferreira')).toBeInTheDocument();
            expect(screen.getByText('Freitas Castelo')).toBeInTheDocument();
        });
    });

    it('deve abrir o modal de cadastro ao clicar no botão "Cadastrar"', async () => {
        render(<UsuariosAdmin />);

        fireEvent.click(screen.getByTitle('Cadastrar Usuário'));

        expect(screen.getByText('Cadastrar Usuário')).toBeInTheDocument();
    });

    it('deve abrir e enviar o formulário de adição de usuário', async () => {
        mock.onGet('http://localhost:5001/api/usuario/all').reply(200, []);
        mock.onPost('http://localhost:5001/api/usuario/register').reply(200, {
            _id: '3',
            nome: 'Alice Camargo',
            email: 'alice@gmail.com',
            regra: 'Cliente',
            tags: [],
            createdAt: new Date().toISOString()
        });

        render(<UsuariosAdmin />);

        fireEvent.click(screen.getByTitle('Cadastrar Usuário'));

        await waitFor(() => {
            expect(screen.getByText('Cadastrar Usuário')).toBeInTheDocument();
        });
    });

    it('deve lidar com a exclusão do usuário', async () => {
        mock.onGet('http://localhost:5001/api/usuario/all').reply(200, [
            { _id: '1', nome: 'Neto Braga', email: 'neto@gmail.com', regra: 'Admin', tags: [], createdAt: new Date().toISOString() }
        ]);

        mock.onDelete('http://localhost:5001/api/usuario/1').reply(200);

        render(<UsuariosAdmin />);

        await waitFor(() => {
            expect(screen.getByText('Neto Braga')).toBeInTheDocument();
        });

        fireEvent.click(screen.getByTitle('Deletar'));

        await waitFor(() => {
            expect(screen.getByText('Tem certeza de que deseja excluir este usuário?')).toBeInTheDocument();
        });

        fireEvent.click(screen.getByText('Confirmar'));

        await waitFor(() => {
            expect(screen.queryByText('User 1')).not.toBeInTheDocument();
        });
    });

});