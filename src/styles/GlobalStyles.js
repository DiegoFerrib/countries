import { createGlobalStyle } from 'styled-components';
import colors from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    color: ${colors.veryDarkBlueLight};
  }

  #root {
    min-height: 100vh;
    background-color: ${colors.veryLightGray};
  }

  button {
    border: 0;
    background-color: inherit;
    cursor: pointer;
  }

  .center {
    width: 100%;
    max-width: 1276px;
    margin: 0 auto;
  }
`;
