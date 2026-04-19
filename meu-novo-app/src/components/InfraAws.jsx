import "./InfraAws.css";

function InfraAws({ title, price, benefits, variant }) {
  return (
    <div className="infra-card">
      <h3 className={`infra-title title-${variant}`}>{title}</h3>
      <h2 className="infra-price">{price}</h2>
      <ul>
        {benefits.map((item, index) => (
          <li key={index} className="infra-benefit">
            {item}
          </li>
        ))}
      </ul>
      <button className="infra-btn">Saiba mais</button>
    </div>
  );
}
export default InfraAws;