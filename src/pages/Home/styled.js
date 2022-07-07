import styled from 'styled-components';

export const Search = styled.div`
  padding: 48px 30px;

  label {
    width: 100%;
    max-width: 480px;
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  #search {
    font-size: 16px;
    border: none;
    background-color: inherit;
    outline: none;
  }

  select, option {
    font-size: 16px;
    width: 100%;
    max-width: 200px;
    border: none;
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
    border-radius: 5px;
  }
`;

export const GridMap = styled.section`
  padding: 0 30px 30px 30px;

  @media(max-width: 768px) {
    .center {
      justify-content: center !important;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
    }

    .countrie {
      width: auto;
      max-width: none;
    }
  }
`;

export const Countrie = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  width: 100%;
  height: 380px;
  box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
  transition: 400ms;

  &:hover {
    transform: scale(1.05);
  }

  .informations {
    padding: 15px;

    h2 {
      font-size: 25px;
      margin-bottom: 8px;
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
