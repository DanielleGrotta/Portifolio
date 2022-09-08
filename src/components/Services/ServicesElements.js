import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 2) 0%, rgba(0, 0, 0, 6) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 2) 0%, rgba(0, 0, 0, 6) 100%);
  }
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  position: relative;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #000c;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 40px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 1rem;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-bottom: solid 2px  #ff0000;
    box-shadow: 0px 10px 9px -10px  #ff0000;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  user-select: none;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: -120px;
  position: relative;
  user-select: none;
  margin-top: 5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  position: relative;
  user-select: none;
  color: #fff;
`;

export const ServicesH4 = styled.h4`
  color:#ff0000;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  user-select: none;
`;


export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  position: relative;
  user-select: none;
  color: #fff;
  margin-bottom: 4rem;
  letter-spacing: 0px;
`;