import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Nunito Sans', sans-serif;
  }

  html, body, #root {
    min-height: 100vh;
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;

export const Center = styled.section`
  width: 100%;
  max-width: 1276px;
  padding: 0 30px;
  margin: 0 auto;
  min-height: ${(props) => `${props.minHeight}vh` || 'auto'};
  height: ${(props) => `${props.height}vh` || 'auto'};
`;
