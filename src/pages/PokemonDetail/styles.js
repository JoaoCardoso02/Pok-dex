import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 700px) {
        max-width: 60vw !important;
        height: 100vh;
    }
`;

export const Detail = styled.div`
    background: #aaa;
    width: 100%;
    height: 80%;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 2fr 1fr;
    padding: 3rem;
    .divImg {
        display: flex;
        align-items: center;
        img {
            width: 100%;
        }
    }
    .title {
        display: flex;
        justify-content: center;
    }
`;