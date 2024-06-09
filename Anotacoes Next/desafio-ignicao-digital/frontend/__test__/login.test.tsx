import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginForm from '@/app/login/page'; // certifique-se de que o caminho para o seu componente está correto

describe('LoginForm', () => {
  it('renders a heading', () => {
    render(<LoginForm />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
