import styled from 'styled-components';

export const Home = styled.section`

`;

export const Search = styled.div`
  padding: 48px 0;

  #search {
    width: 100%;
    max-width: 480px;
  }

  .center {
    display: flex;
    justify-content: space-between;
  }

  select {
    width: 100%;
    max-width: 200px;
  }
`;

export const GridMap = styled.section`
  .center {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const Countrie = styled.div`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  width: 100%;
  max-width: 262px;
  height: 334px;
  /* background-color: green; */

  img {
    height: 177px;
    width: 100%;
  }
`;
