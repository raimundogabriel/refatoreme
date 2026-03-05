import Card from "./Card";
import Banner from "./Banner";
import './Principal.css'
function Principal() {
    return (
        <main>
            <section id="home" className="banner">
                <Banner />
            </section>

            <section id="services" className="cards-section">
                <h2>Nossas Especialidades</h2>
                <div id="cards-container" className="cards-grid">
                    <Card titulo= "UI/UX Design" texto="Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."/>
                    <Card titulo= "UI/UX Design" texto="Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."/>
                    <Card titulo= "UI/UX Design" texto="Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."/>
                    <Card titulo= "UI/UX Design" texto="Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."/>
                </div>
            </section>
        </main>
    )
}

export default Principal;