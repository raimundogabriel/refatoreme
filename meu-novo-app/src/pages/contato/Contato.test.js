import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contato from './Contato';

describe('Componente Contato', () => {
    // Mock do window.alert para evitar erros no console durante os testes
    beforeAll(() => {
        window.alert = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('1. deve renderizar os campos do formulário corretamente', () => {
        render(<Contato />);

        expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/CPF/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Aceito receber comunicações/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Enviar Mensagem/i })).toBeInTheDocument();
    });

    it('2. deve aplicar a máscara de CPF corretamente ao digitar', () => {
        render(<Contato />);
        
        const cpfInput = screen.getByLabelText(/CPF/i);
        
        // Simula a digitação de apenas números
        fireEvent.change(cpfInput, { target: { value: '12345678909' } });
        
        // Verifica se o valor foi formatado com a máscara
        expect(cpfInput.value).toBe('123.456.789-09');
    });

    it('3. deve exibir mensagem de erro ao enviar formulário com e-mail inválido', () => {
        render(<Contato />);

        // Preenche o formulário com um e-mail sem formato válido
        fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'João Silva' } });
        fireEvent.change(screen.getByLabelText(/CPF/i), { target: { value: '123.456.789-09' } });
        fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'email-invalido' } });
        fireEvent.change(screen.getByLabelText(/Mensagem/i), { target: { value: 'Olá!' } });
        fireEvent.click(screen.getByLabelText(/Aceito receber comunicações/i));

        // Submete o formulário
        fireEvent.click(screen.getByRole('button', { name: /Enviar Mensagem/i }));

        // Verifica a exibição do erro
        expect(screen.getByText('Por favor, insira um endereço de e-mail válido.')).toBeInTheDocument();
    });

    it('4. deve exibir mensagem de erro ao enviar formulário com CPF inválido', () => {
        render(<Contato />);

        // Preenche com um CPF que tem o tamanho certo, mas falha no cálculo do dígito verificador
        fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'João Silva' } });
        fireEvent.change(screen.getByLabelText(/CPF/i), { target: { value: '111.222.333-44' } });
        fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'joao@email.com' } });
        fireEvent.change(screen.getByLabelText(/Mensagem/i), { target: { value: 'Olá!' } });
        fireEvent.click(screen.getByLabelText(/Aceito receber comunicações/i));

        fireEvent.click(screen.getByRole('button', { name: /Enviar Mensagem/i }));

        expect(screen.getByText('Por favor, insira um cpf válido')).toBeInTheDocument();
    });

    it('5. deve enviar o formulário com sucesso e limpar os campos quando os dados forem válidos', () => {
        render(<Contato />);

        const nomeInput = screen.getByLabelText(/Nome/i);
        const cpfInput = screen.getByLabelText(/CPF/i);
        const emailInput = screen.getByLabelText(/E-mail/i);
        const mensagemInput = screen.getByLabelText(/Mensagem/i);
        const termosCheckbox = screen.getByLabelText(/Aceito receber comunicações/i);
        const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

        // Preenche com dados válidos (o CPF 123.456.789-09 passa no algoritmo matemático padrão)
        fireEvent.change(nomeInput, { target: { value: 'Maria Souza' } });
        fireEvent.change(cpfInput, { target: { value: '12345678909' } });
        fireEvent.change(emailInput, { target: { value: 'maria@empresa.com' } });
        fireEvent.change(mensagemInput, { target: { value: 'Tenho interesse em uma parceria.' } });
        fireEvent.click(termosCheckbox);

        fireEvent.click(submitButton);

        // Verifica se o alert de sucesso foi chamado
        expect(window.alert).toHaveBeenCalledWith('Mensagem enviada com sucesso! Entraremos em contato em breve.');

        // Verifica se os campos foram resetados para o estado inicial
        expect(nomeInput.value).toBe('');
        expect(cpfInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(mensagemInput.value).toBe('');
        expect(termosCheckbox.checked).toBe(false);
    });
});