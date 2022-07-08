import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Nunito Sans', sans-serif;
  }

  #root {
    min-height: 100vh;
  }

  button {
    border: 0;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const Center = styled.div`
  width: 100%;
  max-width: 1276px;
  margin: 0 auto;
`;
