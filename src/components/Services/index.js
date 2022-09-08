import React from 'react';
import Icon1 from '../../images/crud.gif';
import Icon2 from '../../images/pc.gif';
import Icon3 from '../../images/cel.gif';
import Video from '../../videos/bac.mp4';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HeroBg,VideoBg } from '../HeroSection/HeroElements';
import { 
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesH4,
  ServicesP 
} from './ServicesElements';





const Services = () => {

  const items = [
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>CRUD 1.0</ServicesH2>
          <ServicesH4>PHP | MySQL | JavaScript</ServicesH4>
          <ServicesP>
            Sistema de cadastro de usuários, com as operações básicas de CRUD (Create, Read, Update e Delete).
          </ServicesP>
        </ServicesCard>,
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>E-commerce</ServicesH2>
          <ServicesH4>React | Node | Styled-Components | MySQL</ServicesH4>
          <ServicesP>
            Sistema de e-commerce com carrinho de compras, cadastro de produtos e usuários, e sistema de pagamento.
          </ServicesP>
        </ServicesCard>,   
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>CRUD 2.0</ServicesH2>
          <ServicesH4>React | Node | MySQL</ServicesH4>
          <ServicesP>
            Uma versão melhorada do CRUD 1.0, totalmente responsiva, com sistema de login e cadastro de usuários.
          </ServicesP>
        </ServicesCard>
  
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1000: { items: 3 }
  };

  return (
    <ServicesContainer id="services">
      <HeroBg>
        <VideoBg 
          autoPlay={true} 
          loop={true}
          controls={false} 
          playsInline
          muted={true} 
          src={Video}
          type="video/mp4" />
      </HeroBg>
    <ServicesH1>Projetos</ServicesH1>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          infinite
          autoPlayInterval={2500}
          animationDuration={1700}
          disableButtonsControls
          disableDotsControls
          disableSlideInfo
        />
      <ServicesWrapper >
      </ServicesWrapper >
    </ServicesContainer>
  )
}

export default Services