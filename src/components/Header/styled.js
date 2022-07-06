import styled from 'styled-components';

export const Header = styled.header`
  padding: 30px;
  box-shadow: 0px 7px 5px 0px rgba(117,117,117,0.9);

  .center a .inicial_text {
    font-size: 22px;
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
