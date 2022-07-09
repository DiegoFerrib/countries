import styled from 'styled-components';
import { Center as GlobalCenter } from '../../styles/Global';

// Novo

export const Home = styled.section`
  min-height: 90vh;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
`;

export const Search = styled.div`
  padding: 4.8rem 3rem;
`;

export const Center = styled(GlobalCenter)`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;

  form {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    max-width: 480px;
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
    padding: 1rem;
    border-radius: 0.5rem;
    height: 50px;
  }

  input {
    width: 100%;
    font-size: 1.6rem;
    border: none;
    background-color: inherit;
    outline: none;
  }
`;

export const Select = styled.select`
  background-color: ${({ bgColor }) => bgColor};
  color: inherit;
  font-size: 1.6rem;
  height: 50px;
  width: 100%;
  max-width: 200px;
  border: none;
  box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
  border-radius: 0.5rem;
`;

export const Option = styled.option``;

// Antigo

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
  animation: animation 500ms;

  @keyframes animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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
