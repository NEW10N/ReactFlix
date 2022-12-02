import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
        width: 100vw;
    }
    body, #root{
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        /* background-color: dodgerblue; */
    }

    input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`