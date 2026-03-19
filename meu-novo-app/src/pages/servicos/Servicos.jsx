import Card from '../../components/principal/Card';
import './Servicos.css';

function Servicos() {
    // Array com os dados dos serviços. Fica muito mais fácil adicionar ou remover itens depois!
    const servicesList = [
        {
            id: 1,
            title: "Desenvolvimento Sob Medida",
            description: "Criamos sistemas web e aplicativos móveis escaláveis para impulsionar o seu negócio globalmente.",
        },
        {
            id: 2,
            title: "Soluções em Inteligência Artificial",
            description: "Integração de IA e Machine Learning para automatizar processos e gerar insights valiosos.",
        },
        {
            id: 3,
            title: "Alocação de Desenvolvedores",
            description: "Equipes de alta performance prontas para atuar em projetos internacionais e desafios complexos.",
        },
        {
            id: 4,
            title: "Design Estratégico (UI/UX)",
            description: "Planejamento de design focado na melhor experiência para o usuário e conversão de resultados.",
        }
    ];

    return (
        <main className="servicos-page">
            <section className="servicos-header">
                <h2>Nossos Serviços</h2>
                <p>Descubra como a TechNova pode transformar sua ideia em realidade com tecnologia de ponta.</p>
            </section>
            
            <section className="servicos-grid">
                {/* O map vai renderizar um ServiceCard para cada objeto no array acima */}
                {servicesList.map(service => (
                    <Card 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </section>
        </main>
    );
}

export default Servicos;