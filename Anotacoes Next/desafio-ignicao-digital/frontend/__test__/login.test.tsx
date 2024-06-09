import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '@/app/login/page';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ user: { role: 'Admin' } }),
  })
) as jest.Mock;


jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn(),
  }),
}));

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a heading', () => {
    render(<LoginForm />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('shows error message on login failure', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('CredentialsSignin'),
    });

    render(<LoginForm />);

    const errorMessage = screen.getByText('Erro no Login');
    expect(errorMessage).toBeInTheDocument();
  });

  it('calls signIn with correct data on form submission', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue({ get: jest.fn() });
    (signIn as jest.Mock).mockResolvedValue({ ok: true });

    render(<LoginForm />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByRole('button', { name: /logar/i }));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        redirect: false,
        email: 'test@example.com',
        password: 'password',
      });
    });
  });

  it('redirects to admin dashboard if user is admin', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue({ get: jest.fn() });
    (signIn as jest.Mock).mockResolvedValue({ ok: true });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ user: { role: 'Admin' } }),
      })
    ) as jest.Mock;

    render(<LoginForm />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByRole('button', { name: /logar/i }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/admin/dashboard');
    });
  });

  it('redirects to user dashboard if user is not admin', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue({ get: jest.fn() });
    (signIn as jest.Mock).mockResolvedValue({ ok: true });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ user: { role: 'Client' } }),
      })
    ) as jest.Mock;

    render(<LoginForm />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByRole('button', { name: /logar/i }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });
});
