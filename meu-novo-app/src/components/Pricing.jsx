import React from 'react';

function Pricing() {
  const plans = [
    { name: 'BRONZE', price: '49,90', color: '#cd7f32' },
    { name: 'PRATA', price: '89,90', color: '#ffffff', featured: true },
    { name: 'OURO', price: '149,90', color: '#ffd700' }
  ];

  return (
    <section id="planos" className="pricing-section">
      <h2>NOSSOS PLANOS</h2>
      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.name} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
            <h3 style={{ color: plan.color }}>{plan.name}</h3>
            <p>R$ {plan.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
