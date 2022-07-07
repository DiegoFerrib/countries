import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 10vh;
  box-shadow: 0px 7px 5px 0px rgba(117,117,117,0.9);

  a .inicial_text {
    font-size: 22px;
    font-weight: 800;
  }

  .dark_mode {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    font-weight: 600;

    @media(max-width: 425px) {
      span {
        display: none;
      }
    }
  }
`;
