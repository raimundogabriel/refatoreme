

import './CardsTopicosUI_UX.css'

function CardsTopicosUI_UX(props) {
    return(
        
        <div className="Card">
            
            <div className="ContainerImg" id={props.ContainerImg}>
                <img src={props.Img} alt="Imagem Card" className="ImgCard"/>
            </div>

            <div className="ContainerTextoCard">
                <h2 className="TituloCard">{props.Titulo}</h2>

                <p className="ParagrafoCard">{props.Paragrafo}</p>
            </div>
        </div>
    

    )
}

export default CardsTopicosUI_UX;