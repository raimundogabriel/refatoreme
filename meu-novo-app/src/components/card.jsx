function Card(props) {
  return (
    <div className="card">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
    </div>
  );
}
export default Card;