import './Contato.css';

function Contato() {
    return (
        <section id="secao-contact"
        className="contato-container">
            <h2>Fale Conosco</h2>
            <form
            className="contato-form">
                <input type="text"
                placeholder="Seu Nome" required />
                <input type="email"
                placeholder="Seu E-mail" required />
                <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contato;