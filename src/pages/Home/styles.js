import styled from 'styled-components';
import { Center as GlobalCenter } from '../../styles/Global';

// Novo

export const Home = styled.main`
  min-height: 90vh;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
`;

export const Search = styled.div`
  padding: 4.8rem 0;
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
    border-radius: 5px;
    height: 50px;
  }

  input {
    width: 100%;
    font-size: clamp(1.2rem, 5vw + 0.1rem, 1.8rem);
    border: none;
    background-color: inherit;
    color: inherit;
    outline: none;
  }
`;

export const Select = styled.select`
  background-color: ${({ bgColor }) => bgColor};
  color: inherit;
  font-size: clamp(1.2rem, 5vw + 0.1rem, 1.8rem);
  height: 50px;
  width: 100%;
  max-width: 200px;
  border: none;
  box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
  border-radius: 5px;
  padding: 0 1rem;
`;

export const Option = styled.option``;

export const GridMap = styled(GlobalCenter)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-content: space-between;
  grid-gap: 50px;
  padding-bottom: 3rem;
`;
