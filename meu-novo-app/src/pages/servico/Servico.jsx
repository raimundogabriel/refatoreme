import InfraAws from "../../components/InfraAws";
import Banner from "../../components/principal/Banner";
import Card from "../../components/principal/Card";
import "./Servico.css";

function Servico() {
  const awsData = [
  {
      id: 1,
      title: "Plano Básico",
      price: "R$ 49/mês",
      benefits: [
      "1 instância EC2",
      "Deploy simples",
      "Suporte básico"
    ]
  },
  {
      id: 2,
      title: "Plano Profissional",
      price: "R$ 149/mês",
      benefits: [
        "Load Balancer",
        "Banco RDS",
        "Monitoramento",
        "Suporte prioritário"
      ]
  },
  {
      id: 3,
      title: "Plano Enterprise",
      price: "R$ 399/mês",
      benefits: [
      "Auto Scaling",
      "Alta disponibilidade",
      "Segurança avançada",
      "Suporte 24/7"
    ]
  }
];


  return (
      <section id="Infraestrutura" className="cards-section">
        <h2>Nossos serviços de Infraestrutura Aws</h2>

        <div className="layout">
          <div id="cards-container" className="cards-grid">
            {awsData.map((aws, index) => (
              <InfraAws
                key={aws.id}
                title={aws.title}
                price={aws.price}
                benefits={aws.benefits}
                variant={index}
              />
            ))}
          </div>
        </div>
      </section>
    
  ); 
}

export default Servico;