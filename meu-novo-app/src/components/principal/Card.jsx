import './Card.css'

function Card(props){
    return(
        <div className='card'>
            <h3 className="titulo">{props.title}</h3>
            <p className="descricao">{props.description}</p>
        </div>
    )
}
export default Card;