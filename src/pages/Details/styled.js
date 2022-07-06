import styled from 'styled-components';

export const DetailsPage = styled.section`
  min-height: 90vh;
`;

export const CountrieDetails = styled.section`
  display: flex;
  justify-content: space-between;

  .countrie_data {
    display: flex;
  }

  img {
    width: 50%;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 130px;
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
`;
