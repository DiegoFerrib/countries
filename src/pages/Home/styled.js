import styled from 'styled-components';
import colors from '../../config/colors';

export const Search = styled.div`
  padding: 48px 30px;

  label {
    background-color: green;
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.2);
    padding: 10px;
  }

  #search {
    font-size: 16px;
    width: 480px;
    border: none;
  }

  .center {
    display: flex;
    justify-content: space-between;
  }

  select {
    font-size: 16px;
    width: 100%;
    max-width: 200px;
    border: none;
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.2);
  }
`;

export const GridMap = styled.section`
  padding: 0 30px;

  .center {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;
  }
`;

export const Countrie = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  width: 100%;
  max-width: 262px;
  height: 334px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.2);

  .informations {
    padding: 25px;

    h2 {
      font-size: 20px;
    }
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
`;
