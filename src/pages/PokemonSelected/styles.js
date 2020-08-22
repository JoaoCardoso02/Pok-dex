import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root {
    @media only screen and (max-width: 700px) {
      height: 100vh;
    }
  }
`;

export const Container = styled.div`
  max-width: 100vw !important;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    height: auto;
  }
`;

export const DataPokemon = styled.div`
  width: 80%;
  height: 80%;
  background: #d8d8d8;
  border-radius: 12px;
  position: relative;
  filter: drop-shadow(4px 6px 7px #555);
`;


export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 700px) {
    grid: none;
  }
`;

export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  img {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;
export const DivCharacteristics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 0;
  position: relative;
  .name {
    font: 500 3.5rem Poppins;
    text-transform: capitalize;
  }
  ul {
    list-style: none;
    padding: 0;
    font: 400 1.3rem Poppins;
    li {
      text-align: center;
    }
  }
  .divCharacteristicsIntern {
    width: 50%;
    text-align: center;
    margin-top: 2rem;

    @media only screen and (max-width: 700px) {
      width: 100%;
    }
  }
  
  .typesAbilities {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;
  }

  .titleCharacteristics {
      font: 500 1.5rem Poppins;
      margin-top: 5%;
    }
  
`;

export const StatsCharacteristics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;

  @media only screen and (max-width: 700px) {
    grid: none;
  }
`;

export const ButtonBack = styled.button`
  position: absolute;
  bottom: 30px;
  padding: 15px 30px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  outline: none;
  border: 1px solid #ccc;
  background: #f3f3f3;
  cursor: pointer;

  :hover {
    background: #dcdcdc;
    transition: all .5s linear;
  }

  @media only screen and (max-width: 700px) {
    position: initial;
    transform: none;
    margin-top: 1rem;
  }
`;