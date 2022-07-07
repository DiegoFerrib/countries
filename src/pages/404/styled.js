import styled from 'styled-components';

export const Page404 = styled.section`

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: inherit;
    min-height: 90vh;

    h2 {
      font-size: 3rem;
    }

    @media(max-width: 768px) {
      h2 {
        font-size: 2rem;
      }
    }
  }

`;
