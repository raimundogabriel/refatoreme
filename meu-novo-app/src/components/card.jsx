import React from 'react';

function Card({ title, description }) {
  return (
    <div className="info-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
