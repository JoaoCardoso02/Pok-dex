import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media only screen and (min-width: 700px) {
        max-width: 95vw !important;
    }
    
`;

export const Content = styled.div`
    width: 95vw;


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

    @media only screen and (min-width: 1600px) {
        /* width: 50%; */
        grid-template-columns: repeat(5, 1fr);
    }
`;