import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Produtos from '../produtos/Produtos';

// Mock do módulo Products
jest.mock('../api/products', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    isLoading: false,
    isError: false,
    data: [{ id: 1, name: 'Produto 1', price: 10, quantidade: 1, photo: '/product1.png' }]
  }))
}));

describe('Produtos', () => {
  it('renderiza corretamente', () => {
    render(<Produtos />);
    // Insira aqui os testes para garantir que os elementos esperados são renderizados corretamente
  });

  it('adiciona um item ao carrinho corretamente', async () => {
    const { getByText } = render(<Produtos />);
    const button = getByText('COMPRAR');

    fireEvent.click(button);

    // Espera que o item seja adicionado ao carrinho
    await waitFor(() => {
      expect(getByText('Total')).toHaveTextContent('R$ 10');
    });
  });

  // Insira aqui mais testes conforme necessário para cobrir os casos de uso do seu componente
});
