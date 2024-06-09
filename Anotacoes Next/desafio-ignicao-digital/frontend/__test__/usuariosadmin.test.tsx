// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import UsuariosAdmin from '@/components/UsuariosAdmin';
// import axios from 'axios';

// describe('UsuariosAdmin', () => {
//   beforeEach(() => {
//     // Mock de axios.get e axios.delete
//     jest.spyOn(axios, 'get').mockResolvedValue({ data: [] });
//     jest.spyOn(axios, 'delete').mockResolvedValue({});
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders UsuariosAdmin component correctly', () => {
//     render(<UsuariosAdmin />);
    
//     // Verifica se os elementos principais estão presentes
//     expect(screen.getByPlaceholderText('Buscar Usuário...')).toBeInTheDocument();
//     expect(screen.getByText('Cadastrar Usuário')).toBeInTheDocument();
//     // Outras verificações de elementos podem ser adicionadas conforme necessário
//   });

//   it('fetches data from API when component mounts', async () => {
//     render(<UsuariosAdmin />);
    
//     // Verifica se axios.get foi chamado
//     expect(axios.get).toHaveBeenCalledWith('http://localhost:5001/api/usuario/all', { headers: { "authorization": 'jwt' } });
//     await waitFor(() => {
//       // Verifica se os dados são renderizados corretamente após o carregamento
//       expect(screen.getByText('Nome do Usuário')).toBeInTheDocument();
//       // Outras verificações de dados podem ser adicionadas conforme necessário
//     });
//   });

//   it('deletes user when delete button is clicked', async () => {
//     render(<UsuariosAdmin />);
    
//     // Simula o clique no botão de deletar
//     fireEvent.click(screen.getByTitle('Deletar'));

//     // Verifica se axios.delete foi chamado
//     expect(axios.delete).toHaveBeenCalledWith('http://localhost:5001/api/usuario/1', { headers: { "authorization": 'jwt' } });

//     // Aguarda a resolução da promessa
//     await waitFor(() => {
//       // Verifica se o usuário foi removido da lista
//       expect(screen.queryByText('Nome do Usuário')).not.toBeInTheDocument();
//       // Outras verificações podem ser adicionadas conforme necessário
//     });
//   });

//   // Adicione mais testes conforme necessário
// });
