import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    @media only screen and (min-width: 700px) {
        max-width: 95vw !important;
    }
`;

export const Content = styled.div`
    margin-top: 1.5rem;
    width: 95vw;

    @media only screen and (min-width: 1600px) {
        max-width: 90vw !important;
    }
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
`;

export const ListPokemons = styled.div`
    width: 100%;
    display: grid;
    

    @media only screen and (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const LoadingAnimate = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    position: relative;
    div {
        position: absolute;
        margin: 20px;
        background: red;
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    div:nth-child(1) {
        transform-origin: 50% 50%;
        animation: jump .5s linear alternate infinite;
        margin: auto;
        @keyframes jump {
            0%   {transform: translate3d(0,0,0) scale3d(1,1,1); background: #ccc}
            40%  {transform: translate3d(0,30%,0) scale3d(.7,1.5,1);}
            100% {transform: translate3d(0,100%,0) scale3d(1.5,.7,1); background: #060606}
        }
    }
`;