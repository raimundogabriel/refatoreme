import { useState } from 'react';
import './Contato.css';

function Contato() {
    // Gerencia o estado dos campos do formulário
    const [formData, setFormData] = useState({
        nome: '',
        cpf:'',
        email: '',
        mensagem: '',
        aceitaTermos: false
    });


    // Gerencia o estado e os erros do campo CPF
    const [cpfError, setCpfError] = useState('');


    // Gerencia o estado e os erros do campo email 
    const [emailError, setEmailError] = useState('');

    const mascaraCPF = (valor) => {
        // 1. Remove tudo o que não é número (o \D significa "não-dígito")
        let cpfLimpo = valor.replace(/\D/g, "");

        // 2. Aplica os pontos e o traço progressivamente
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca o primeiro ponto
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca o segundo ponto
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca o traço

        return cpfLimpo;
    };

    // Atualiza o estado conforme o usuário digita
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let novoValor = type === 'checkbox' ? checked : value;

        
        if (name === 'email' && emailError) {
            setEmailError('');
        }
        
        if (name === 'cpf' && cpfError){
            setCpfError('');
        }
        
        if (name == 'cpf'){
            novoValor = mascaraCPF(novoValor)
        }
        setFormData({
            ...formData,
            [name]: novoValor
        });
    };

    // Função validadora do cpf parte 1
    const validarCpfComRegex = (cpf) => {
        const regexCpfFormatado = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const regexCpfApenasNumeros = /^\d{11}$/;
        
        return regexCpfFormatado.test(cpf) || regexCpfApenasNumeros.test(cpf);
    }

    // Função validadora do cpf parte 2
    const validarCpfOficial = (cpf) => {
        // Limpa a string tirando pontos e traços (usando métodos de array/string em vez de regex)
        const cpfLimpo = cpf.split('').filter(char => char >= '0' && char <= '9').join('');

        // Rejeita CPFs com tamanho errado ou números repetidos (ex: 111.111.111-11)
        if (cpfLimpo.length !== 11) return false;
        
        let todosIguais = true;
        for (let i = 1; i < 11; i++) {
            if (cpfLimpo[0] !== cpfLimpo[i]) todosIguais = false;
        }
        if (todosIguais) return false;

        // Cálculo do 1º Dígito Verificador
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

        // Cálculo do 2º Dígito Verificador
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

        return true;
    }



    // Função auxiliar para validar o formato do e-mail via Regex
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que a página recarregue

        // Checagem de cpf com regex antes de enviar
        // if (!validarCpfComRegex(formData.cpf)){
        //     setCpfError('Por favor, insira um cpf somente com numeros');
        //     return;
        // }
        
        // Checagem de cpf com o algoritmo oficial antes de enviar
        if (!validarCpfOficial(formData.cpf)){
            setCpfError('Por favor, insira um cpf válido');
            return;
        }
        
        
        // Checagem de e-mail antes de enviar
        if (!validarEmail(formData.email)) {
            setEmailError('Por favor, insira um endereço de e-mail válido.');
            return; // Interrompe a execução aqui, não envia o formulário
        }


        console.log('Dados enviados:', formData);
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        // Limpa o formulário após o envio
        setFormData({ nome: '',cpf:'', email: '', mensagem: '', aceitaTermos: false });
    };

    return (
        <main className="contato-page">
            <div className="contato-container">
                <div className="contato-info">
                    <h2>Vamos conversar?</h2>
                    <p>
                        Quer escalar seu próximo projeto? Nosso time de desenvolvedores no Rio de Janeiro está pronto para assumir desafios e atuar em projetos globais.
                    </p>
                    <p>Preencha o formulário e nossa equipe entrará em contato.</p>
                </div>

                <form className="contato-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            placeholder="Seu nome completo"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="nome">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            required
                            maxLength="14"
                            placeholder="Seu cpf 123.456.789-99"
                            className={cpfError ? 'input-error' : ''}
                        />
                        {/* Exibe a mensagem de erro se cpfError não estiver vazio */}
                        {cpfError && <span className="error-text" style={{ color: 'red', fontSize: '14px' }}>{cpfError}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="seu@email.com"
                            className={emailError ? 'input-error' : ''}
                        />
                        {/* Exibe a mensagem de erro apenas se emailError não estiver vazio */}
                        {emailError && <span className="error-text" style={{ color: 'red', fontSize: '14px', marginTop: '5px', display: 'block' }}>{emailError}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="5"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                            placeholder="Como podemos te ajudar?"
                        ></textarea>
                    </div>

                    <div className="form-group checkbox-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <input
                            type="checkbox"
                            id="aceitaTermos"
                            name="aceitaTermos"
                            checked={formData.aceitaTermos} // Checkbox usa 'checked' no lugar de 'value'
                            onChange={handleChange}
                            required // Torna o aceite obrigatório
                        />
                        <label htmlFor="aceitaTermos" style={{ margin: 0, fontWeight: 'normal' }}>
                            Aceito receber comunicações e concordo com os termos de privacidade.
                        </label>
                    </div>



                    <button type="submit" className="submit-btn">Enviar Mensagem</button>
                </form>
            </div>
        </main>
    );
}

export default Contato;