import { createGlobalStyle } from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
</style>

const GlobalStyle = createGlobalStyle`
  * {
    scrollbar-width: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: Oswald;
    background-color: #f3f4f6;
  }
`;

export default GlobalStyle;
