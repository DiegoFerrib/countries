import styled from 'styled-components';

export const DetailsPage = styled.section`
  .button-separator {
    padding: 70px 0;
  }

  @media(max-width: 768px) {
    .button-separator {
      padding: 40px 0;
    }
  }
`;

export const CountrieDetails = styled.section`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;

  .countrie_data {
    display: flex;
    gap: 20px;
  }

  img {
    width: 40%;
    max-width: 550px;
    object-fit: cover;
  }

  .data {
    width: 40%;
    max-width: 550px;
    padding: 30px 0;
  }


  @media(max-width: 768px) {
    flex-direction: column !important;
    justify-content: flex-start !important;
    align-items: flex-start !important;

    img, .data {
      width: 100%;
      max-width: none;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 130px;
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
`;
