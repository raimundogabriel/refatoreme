
// componente card:
import CardsTopicoUI_UX from './CardsTopicosUI_UX/CardsTopicosUI_UX'

// componente css:
import './Section_Servico_UI_UX.css'

// imagens:
import ImgDesignProduto from '../assets/img/img-design-produto-svg.svg'

import ImgMobileApp from '../assets/img/img-mobile-app-svg.svg'

import ImgWebSite from '../assets/img/img-web-site-svg.svg'

import ImgInterfaceSoftaware from '../assets/img/img-interface-software-svg.svg'

import ImgTesteUsabilidade from '../assets/img/img-teste-usabilidade-svg.svg'

import ImgAcessibilidade from '../assets/img/img-acessibilidade-svg.svg'

// setas:
import SetaEsquerda from '../assets/setasCarrossel/arrow-left.svg'

import SetaDireita from '../assets/setasCarrossel/arrow-right.svg'


import { useRef } from 'react'

function ServicoUI_UX() {

    const DadosCards = [
        {
            id:1,
            ContainerImg: '',
            Img: ImgDesignProduto,
            Titulo: "Design de Produtos", 
            Paragrafo: "Transformamos sua ideia em um produto digital com identidade visual forte, intuitivo e pronto para conquistar o mercado. "
            
        },
        {
            id:2,
            ContainerImg: '',
            Img: ImgMobileApp,
            Titulo: "Criação de Apps Mobile", 
            Paragrafo: "Desenvolvemos interfaces mobile que combinam beleza e funcionalidade, garantindo uma experiência fluida em iOS e Android."
            
        },
        {
            id:3,
            ContainerImg: '',
            Img: ImgWebSite,
            Titulo: "Web Site",
            Paragrafo: "Criamos sites modernos e responsivos que comunicam o valor da sua marca e convertem visitantes em clientes."
        },
        {
            id:4,
            ContainerImg: '',
            Img: ImgInterfaceSoftaware,
            Titulo: "Interface de Softwate",
            Paragrafo: "Simplificamos sistemas complexos com interfaces claras e eficientes, aumentando a produtividade de quem usa no dia a dia."
        },
        {
            id:5,
            ContainerImg: '',
            Img: ImgTesteUsabilidade,
            Titulo: "Testes de Usabilidade",
            Paragrafo: "Validamos cada detalhe da interface com usuários reais, identificando melhorias antes do lançamento e reduzindo retrabalho."
        },
        {
            id:6,
            ContainerImg: '',
            Img: ImgAcessibilidade,
            Titulo: "Acessibilidade Digital",
            Paragrafo: "Desenvolvemos interfaces inclusivas que funcionam para todos, seguindo as diretrizes WCAG e ampliando o alcance do seu produto."
        }
    ];


    // useRef importado:
    const carrossel = useRef(null);
    
    const ArrowLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;

    }

    const ArrowRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }


    return(
        <section className="SectionUI_UX">
            <div className="AreaTexto">
                <h1 className="TituloSection">UI/UX Design</h1>

                <p className="ParagrafoSection">
                    Criamos experiências digitais que conectam pessoas e produtos. 
                    Do conceito à entrega, cada detalhe é pensado para encantar o usuário 
                    e gerar resultados reais para o seu negócio.
                </p>

                <button className="ButtonSaibaMais">
                    Acessar Serviço
                </button>

            </div>
            {/* ref com useRef importado */}
                <div className="ContainerCards" ref={carrossel} >
                    {DadosCards.map((dado) => (

                    <CardsTopicoUI_UX 
                    ContainerImg={dado.ContainerImg}
                    Img={dado.Img}
                    Titulo={dado.Titulo}
                    Paragrafo={dado.Paragrafo}
                     />

                    ))}


                    
                </div>

                
            <div className="SetasCarrossel">
    
                    <button onClick={ArrowLeftClick} className='ButtonSetaEsquerda'><img src={SetaEsquerda} alt="" className='ImgSetaEsquerda' /></button>
                    
    
                    <button onClick={ArrowRightClick}className='ButtonSetaDireita'><img src={SetaDireita} alt="" className='ImgSetaDireita' /></button>
            </div>


            

        </section>

    )
}

export default ServicoUI_UX;