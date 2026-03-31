export default function Card({ titulo, descricao }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}