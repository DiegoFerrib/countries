import styled from 'styled-components';
import { Center as GlobalCenter } from '../../styles/Global';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
  height: 10vh;
  box-shadow: 0px 7px 5px 0px rgba(117,117,117,0.6);

  h1 {
    font-size: clamp(1.6rem, 5vw, 2.8rem);
    font-weight: 800;
  }

  button {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: clamp(1.6rem, 2.5vw, 2rem);
    font-weight: 300;
    background-color: inherit;
    color: inherit;

    @media(max-width: 425px) {
      span {
        display: none;
      }
    }
  }
`;

export const Center = styled(GlobalCenter)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;
