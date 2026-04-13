import ServicoUI_UX from '../../components/Section_Servico_UI_UX'
import GameDev from '../../components/principal/GameDev';
import ServicoIA from '../../components/ServicoIA';
import DataEngineeringService from '../../components/DataEngineeringService';

function Servico() {
    return (
        <>
            <ServicoUI_UX />
            <GameDev />
            <div style={{ padding: '40px' }}>
                <h1>TechNova</h1>
                <p>A tecnologia do futuro:</p>

                <ServicoIA />
            </div>
            <DataEngineeringService />
        </>
    )
}
export default Servico;