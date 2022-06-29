import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
}

body{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    width: 100vw;
    height: 100vh;
}

h1 {
    color: ${({ theme }) => theme.colors.main};
    font-size: 6rem;
  }

  h1:hover{
      font-size: 7rem;
  }

  h3 {
    font-size: 2rem;
  }

  h3:hover{
    font-style: italic;
  }

  p{
    color: ${({ theme }) => theme.colors.grey};
  }

`;

export default GlobalStyle;
