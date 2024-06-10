import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import UsuariosCliente from '../src/components/UsuariosCliente';

const mock = new MockAdapter(axios);

describe('UsuariosCliente Component', () => {
    beforeEach(() => {
        mock.onGet('http://localhost:5001/api/usuario/me').reply(200, { tags: ['tag1', 'tag2'] });

        document.cookie = 'jwt=mockedToken';
    });

    afterEach(() => {
        mock.reset();
        document.cookie = '';
    });

    it('deve lidar com a ausência de tags do usuário', async () => {
        mock.onGet('http://localhost:5001/api/usuario/me').reply(200, { tags: [] });

        render(<UsuariosCliente />);

        await waitFor(() => expect(screen.getByText('As tags atribuídas a você são:')).toBeInTheDocument());
        expect(screen.getByText('Nenhuma tag atribuída')).toBeInTheDocument();
    });
});
