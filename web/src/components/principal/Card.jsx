import './Card.css';
function Card(props) {
    return (
        <div className="card"> 
            <h3 className="title">{props.titulo}</h3>
            <p className="description">{props.descricao}</p>
        </div>
    );
}
export default Card;