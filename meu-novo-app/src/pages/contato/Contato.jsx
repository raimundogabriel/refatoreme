import { useState } from 'react';
import './Contato.css';

function Contato() {
    // Gerencia o estado dos campos do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
        aceitaTermos: false
    });

    const [emailError, setEmailError] = useState('');

    // Atualiza o estado conforme o usuário digita
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        if (name === 'email' && emailError) {
            setEmailError('');
        }
    };

    // Função auxiliar para validar o formato do e-mail via Regex
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que a página recarregue

        // Checagem de e-mail antes de enviar
        if (!validarEmail(formData.email)) {
            setEmailError('Por favor, insira um endereço de e-mail válido.');
            return; // Interrompe a execução aqui, não envia o formulário
        }


        console.log('Dados enviados:', formData);
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        // Limpa o formulário após o envio
        setFormData({ nome: '', email: '', mensagem: '', aceitaTermos: false });
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
    )
}

export default Contato;