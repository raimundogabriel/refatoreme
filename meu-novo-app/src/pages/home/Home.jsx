import Banner from '../../components/principal/Banner';
import Card from '../../components/principal/Card';
import ChatEducacional from '../../components/principal/ChatEducacional';
import './Home.css';

function Home() {
    const servicesData = [
        {
            id: 1,
            title: "UI/UX Design",
            description: "Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."
        },
        {
            id: 2,
            title: "Infraestrutura AWS",
            description: "Arquitetura, deploy e manutenção de soluções escaláveis na nuvem."
        },
        {
            id: 3,
            title: "IA & Game Dev",
            description: "Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial."
        },
        {
            id: 4,
            title: "Engenharia de Dados",
            description: "Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão."
        },
        {
            id: 5,
            title: "Engenharia de Dados",
            description: "Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão."
        }
    ];
    return (
        <main>
            <section id="home" className="banner">
                <Banner />
            </section>

            <section id="services" className="cards-section">
                <h2>Nossas Especialidades</h2>
                <div id="cards-container" className="cards-grid">
                    {servicesData.map((service) => (
                        <Card
                            key={service.id}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </section>
            <div>
                <ChatEducacional />
            </div>
        </main>
    )
}

export default Home;