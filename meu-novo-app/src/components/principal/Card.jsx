import './Card.css';

function Card(props){
    return(
        <div className='card'>
            <h3 className='title'>{props.title}</h3>
            <p className='description'>{props.description}</p>
        </div>
    )
}
export default Card;