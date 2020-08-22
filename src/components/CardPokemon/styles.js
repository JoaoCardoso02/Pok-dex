import styled from 'styled-components';


export const Button = styled.button`

`;

export const Container = styled.div`
    --background-button: ${props => props.color ? props.color : null};
    
    width: 85%;
    margin: 20px auto;
    height: 370px;
    background: linear-gradient(45deg, var(--background-button), #d2d2d2);
    border-radius: 8px;
    position: relative;
    filter: drop-shadow(4px 6px 7px #555);
    .divImg {
        height: 180px;
        img {
            transition: all .5s linear;
            width: 180px;
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            filter: drop-shadow(4px 6px 7px #555);
        }
    }

    .body {
        height: 50%;
        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            list-style: none;
            font-size: 1.2rem;

            li {
                text-transform: uppercase;
            }
        }
    }


    :hover > .divImg img {
        width: 210px;
        top: -50px;

        @media only screen and (min-width: 700px) {
            width: 170px;
            top: -50px;
        }
    }

    :hover > .body #button {
        opacity: 1;
        visibility: visible;
        bottom: 10px;
    }

    @media only screen and (min-width: 700px) {
        height: 320px;
        .divImg {
            height: 150px;
            img {
                width: 150px;
            }
        }
    }
`;

export const Name = styled.h1`
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    font: 500 2rem Poppins;
`;
