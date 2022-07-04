import styled from 'styled-components';
import colors from '../../config/colors';

export const Header = styled.header`
  background-color: ${colors.white};
  padding: 30px;
  box-shadow: 0px 3px 5px 0px rgba(151,151,151,0.8);

  h1 {
    font-size: 18px;
    font-weight: 800;
  }

  .dark_mode {
    font-size: 15px;
    font-weight: 600;
  }

  .center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const L = '';
