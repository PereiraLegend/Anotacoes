import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Produtos from '../produtos/Produtos';

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
  });

  it('adiciona um item ao carrinho corretamente', async () => {
    const { getByText } = render(<Produtos />);
    const button = getByText('COMPRAR');

    fireEvent.click(button);

    await waitFor(() => {
      expect(getByText('Total')).toHaveTextContent('R$ 10');
    });
  });

});
