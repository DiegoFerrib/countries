import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import colors from '../config/colors';

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
    background-color: ${colors.veryLightGray};
    color: ${colors.veryDarkBlueLight};
  }

  button {
    border: 0;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
  border-color: #e8273b;
  color: #FFF;
  background-color: #ed5565;
  }
`;

export const Center = styled.div`
  width: 100%;
  max-width: 1276px;
  margin: 0 auto;
`;
