import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import TagsAdmin from '../src/components/TagsAdmin';
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

describe('TagsAdmin Component', () => {
    beforeEach(() => {
        mock.onGet('http://localhost:5001/api/tag').reply(200, [
            {  _id: '1', nome: 'Tag1', descricao: 'tag1', createdAt: new Date().toISOString(), },
        ]);

        // mock.onGet('http://localhost:5001/api/tag').reply(200, [
        //     { nome: 'tag1' },
        //     { nome: 'tag2' },
        // ]);

        document.cookie = 'jwt=mockedToken';
    });

    afterEach(() => {
        mock.reset();
        document.cookie = '';
    });

    it('deve renderizar a lista de tags', async () => {
        render(<TagsAdmin />);

        expect(await screen.findByText('Tag1')).toBeInTheDocument();
        expect(await screen.findByText('tag1')).toBeInTheDocument();
    });

    it('deve filtrar as tags pela barra de busca', async () => {
        render(<TagsAdmin />);

        await waitFor(() => expect(screen.getByText('Tag1')).toBeInTheDocument());

        fireEvent.change(screen.getByPlaceholderText('Buscar Tag...'), {
            target: { value: 'Tag1' },
        });

        expect(screen.getByText('Tag1')).toBeInTheDocument();
    });

    it('deve filtrar as tags por nome', async () => {
        mock.onGet('http://localhost:5001/api/tag').reply(200, [
            { _id: '2', nome: 'Tag2', descricao: 'tag2', createdAt: new Date().toISOString() },
            { _id: '1', nome: 'Tag1', descricao: 'tag1', createdAt: new Date().toISOString() }
        ]);

        render(<TagsAdmin />);

        await waitFor(() => {
            expect(screen.getByText('Tag2')).toBeInTheDocument();
        });

        fireEvent.click(screen.getAllByTitle('Ordenar por Nome')[0]);

        await waitFor(() => {
            const rows = screen.getAllByRole('row');
            expect(rows[1]).toHaveTextContent('Tag1');
            expect(rows[2]).toHaveTextContent('Tag2');
        });
    });

    it('deve renderizar o componente e buscar dados da tag', async () => {
        mock.onGet('http://localhost:5001/api/tag').reply(200, [
            { _id: '1', nome: 'Tag1', descricao: 'tag1', createdAt: new Date().toISOString() },
            { _id: '2', nome: 'Tag2', descricao: 'tag2', createdAt: new Date().toISOString() }
        ]);

        render(<TagsAdmin />);

        await waitFor(() => {
            expect(screen.getByText('Tag1')).toBeInTheDocument();
            expect(screen.getByText('Tag2')).toBeInTheDocument();
        });
    });

    it('deve abrir o modal de cadastro ao clicar no botão "Cadastrar"', async () => {
        render(<TagsAdmin />);

        fireEvent.click(screen.getByTitle('Cadastrar Tag'));

        expect(screen.getByText('Cadastrar Tag')).toBeInTheDocument();
    });

    it('deve abrir e enviar o formulário de adição de tag', async () => {
        mock.onGet('http://localhost:5001/api/tag').reply(200, []);
        mock.onPost('http://localhost:5001/api/tag').reply(200, {
             _id: '2', nome: 'Tag2', descricao: 'tag2', createdAt: new Date().toISOString()
        });

        render(<TagsAdmin />);

        fireEvent.click(screen.getByTitle('Cadastrar Tag'));

        await waitFor(() => {
            expect(screen.getByText('Cadastrar Tag')).toBeInTheDocument();
        });
    });

    it('deve abrir e enviar o formulário de edição de tag', async () => {
        mock.onGet('http://localhost:5001/api/tag').reply(200, [
            { _id: '2', nome: 'Tag2', descricao: 'tag2', createdAt: new Date().toISOString() },
        ]);

        mock.onPut('http://localhost:5001/api/tag/1').reply(200, {
             _id: '2', nome: 'Tag4', descricao: 'tag4', createdAt: new Date().toISOString()
        });

        render(<TagsAdmin />);

        await waitFor(() => expect(screen.getByText('Tag2')).toBeInTheDocument());

        fireEvent.click(screen.getByTitle('Editar'));

        await waitFor(() => expect(screen.getByText('Editar Tag')).toBeInTheDocument());

        fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Tag4' } });

        fireEvent.click(screen.getByText('Editar'));

    });

    it('deve lidar com a exclusão da tag', async () => {
        mock.onGet('http://localhost:5001/api/tag').reply(200, [
            { _id: '1', nome: 'Tag1', descricao: 'tag1', createdAt: new Date().toISOString() }
        ]);

        mock.onDelete('http://localhost:5001/api/tag/1').reply(200);

        render(<TagsAdmin />);

        await waitFor(() => {
            expect(screen.getByText('Tag1')).toBeInTheDocument();
        });

        fireEvent.click(screen.getByTitle('Deletar'));

        await waitFor(() => {
            expect(screen.getByText('Tem certeza de que deseja excluir este item?')).toBeInTheDocument();
        });

        fireEvent.click(screen.getByText('Confirmar'));

        await waitFor(() => {
            expect(screen.queryByText('Tag1')).not.toBeInTheDocument();
        });
    });

});