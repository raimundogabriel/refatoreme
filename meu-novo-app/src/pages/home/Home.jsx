import './Home.css'
import Banner from '../../components/principal/Banner';
import Card from '../../components/principal/Card';
import React, { useState, useEffect } from 'react';
import Maps from '../../components/Maps';

function Home() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCharacters = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://swapi.dev/api/people');

            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }

            const data = await response.json();
            setCharacters(data.results); // O array de personagens fica em 'results'
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Dispara o fetch quando o componente renderiza pela primeira vez
    useEffect(() => {
        fetchCharacters();
    }, []);

    if (loading) return <p>Carregando personagens...</p>;
    if (error) return <p>Erro: {error}</p>;


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
            title: "Game Dev",
            description: "Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial."
        },
        {
            id: 4,
            title: "Engenharia de Dados",
            description: "Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão."
        },
        {
            id: 5,
            title: "Inteligência Artificial",
            description: "Projetos focados em aprendizado de maquina e LLMs."
        },
        {
            id: 6,
            title: "Gerênciamento de Projetos",
            description: "Consultoria especializada em análise, desenvolvimento e acompanhamento de resultados de projetos."
        }
    ];
    return (
        <main>
            <Banner />
            
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
                <h1>Personagens de Star Wars</h1>
                <ul>
                    {characters.map((person, index) => (
                        <li key={index}>{person.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <Maps />
            </div>
        </main>
    )
}

export default Home;