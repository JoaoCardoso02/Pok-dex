import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #F0F0F7;
        --color-text-base: #444;
        --color-background-dark: #8b8b8c;
        font-size: 80%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--color-background);

        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
        background: transparent;
        
        }
        ::-webkit-scrollbar-thumb {
            background: #313131;
            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button,
    textarea {
        color: var(--color-text-base);
    }

    .container {
        width: 100vw;
        max-width: 700px;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 82.5%;
        }
    }
`;