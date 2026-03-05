import './Card.css'

function Card(props){
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
        }
    ];
    return(
        <div className='card'>
            <h3 className="titulo">{props.titulo}</h3>
            <p className="texto">{props.texto}</p>
        </div>
    )
}
export default Card;