import styled from 'styled-components';

export const Search = styled.div`
  padding: 48px 30px;

  label {
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  #search {
    font-size: 16px;
    width: 480px;
    border: none;
    background-color: inherit;
    outline: none;
  }

  select {
    font-size: 16px;
    width: 100%;
    max-width: 200px;
    border: none;
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
    border-radius: 5px;
  }
`;

export const GridMap = styled.section`
  padding: 0 30px;
`;

export const Countrie = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  width: 262px;
  height: 334px;
  box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
  transition: 400ms;

  &:hover {
    transform: scale(1.05);
  }

  .informations {
    padding: 20px;

    h2 {
      font-size: 25px;
      margin-bottom: 20px;
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
