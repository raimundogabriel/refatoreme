import { useState } from 'react';
import './Contato.css';

function Contato() {
    // Gerencia o estado dos campos do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    // Atualiza o estado conforme o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que a página recarregue
        console.log('Dados enviados:', formData);
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        // Limpa o formulário após o envio
        setFormData({ nome: '', email: '', mensagem: '' });
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
                        />
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

                    <button type="submit" className="submit-btn">Enviar Mensagem</button>
                </form>
            </div>
        </main>
    );
}

export default Contato;