import React from "react";
import "./DataEngineeringService.css";
import { FaDatabase, FaCogs, FaChartLine } from "react-icons/fa";

export default function DataEngineeringService() {
  return (
    <section className="data-section">
      <div className="data-container">
        <span className="tag">SERVIÇO</span>

        <h2>Engenharia de Dados que gera vantagem competitiva</h2>

        <p className="subtitle">
          Transformamos dados em decisões inteligentes. Na Technova,
          estruturamos, organizamos e potencializamos seus dados para
          impulsionar resultados reais.
        </p>

        <div className="cards">
          <div className="card">
            <FaDatabase className="icon" />
            <h3>Integração de Dados</h3>
            <p>
              Unificamos múltiplas fontes em um fluxo confiável e centralizado.
            </p>
          </div>

          <div className="card">
            <FaCogs className="icon" />
            <h3>Automação de Pipelines</h3>
            <p>
              Reduza erros e ganhe eficiência com processos automatizados.
            </p>
          </div>

          <div className="card">
            <FaChartLine className="icon" />
            <h3>Escalabilidade</h3>
            <p>
              Estrutura preparada para crescimento e alto volume de dados.
            </p>
          </div>
        </div>

        <button className="cta-button">
          Fale com um especialista
        </button>
      </div>
    </section>
  );
}