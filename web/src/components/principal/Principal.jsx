import Banner from './Banner'
import Card from './Card'
import './Principal.css'
import Contato from './Contato.jsx'

function Principal () {
    const servicesData = [
    {id: 1, titulo: "UI/UX", descricao: "Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."},
    {id: 2, titulo: "Infraestrutura AWS", descricao: "Arquitetura, deploy e manutenção de soluções escaláveis na nuvem."},
    {id: 3, titulo: "IA & Game Dev", descricao: "Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial."},
    {id: 4, titulo: "Engenharia de Dados", descricao: "Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão."},
    ];

    return(
         <main>
             <Banner />

            <section id="services" className="cards-section">
              <h2>Nossas Especialidades</h2>
              <div id="cards-container" className="cards-grid">
              {servicesData.map((item)=> (
                <Card
                     key={item.id}
                     titulo={item.titulo}
                     descricao={item.descricao}
                 />
              ))}
              </div>
            </section>
            <Contato />
        </main>
    );
}
export default Principal;