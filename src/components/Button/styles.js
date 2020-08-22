import styled from 'styled-components';

export const CustomButton = styled.button`
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    position: absolute;

    border: 2px solid #f2f2f2;
    border-radius: 25px;
    background: #0005;
    font: 500 1rem Poppins;
    color: #000;
    outline: none;
    padding: 15px 30px;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;

    transition: all 0.2s linear;

    @media only screen and (min-width: 700px) {
        padding: 13px;
    }
`;