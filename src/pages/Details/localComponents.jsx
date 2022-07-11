/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import colors from '../../config/colors';

export const ButtonWrapper = ({
  value, bgColor, fontColor, onClick,
}) => (
  <ButtonArea>
    <button
      type="button"
      onClick={onClick}
      style={{
        width: '100%',
        maxWidth: '130px',
        padding: '10px 20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px 4px rgba(151,151,151,0.1)',
        backgroundColor: bgColor,
        color: fontColor,
        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
      }}
    >
      <FaArrowLeft size={20} color={fontColor} />
      {value}
    </button>
  </ButtonArea>
);

const ButtonArea = styled.div`
  padding: 7rem 0;

  @media(max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const CD = styled.section`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 300px;
  padding-bottom: 30px;

  h2 {
    font-size: clamp(1.6rem, 5vw, 2.5rem);
  }

  .countrie_data {
    display: flex;
    gap: 30px;
  }

  img {
    width: 60%;
    object-fit: cover;
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
  }

  .data {
    width: 35%;
    padding: 3rem 0;
  }

  @media(max-width: 1200px) {
    .data, img {
      max-width: none;
    }
  }

  p, span {
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    margin-bottom: 0.8rem;
  }

  .more_infos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }

  .more_infos span {
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
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

export const CountrieDetails = ({ countrieData, theme }) => (
  <CD>
    <img src={countrieData.flags.svg} alt={countrieData.name.common} />
    <section
      className="data"
      style={{
        color: theme === 'light' ? colors.darkBlue : colors.white,
      }}
    >
      <h2>{countrieData.name.common}</h2>
      <div className="countrie_data">
        <div className="data">
          <p>
            <strong>Native Name:</strong>
            {' '}
            {countrieData.name.official}
          </p>
          <p>
            <strong>Population:</strong>
            {' '}
            {countrieData.population.toLocaleString('en-US')}
          </p>
          <p>
            <strong>Region:</strong>
            {' '}
            {countrieData.region}
          </p>
          <p>
            <strong>Sub Region:</strong>
            {' '}
            {countrieData.subregion && countrieData.subregion}
          </p>
          <p>
            <strong>Capital:</strong>
            {' '}
            {countrieData.capital && countrieData.capital[0]}
          </p>
        </div>
        <div className="data">
          <p>
            <strong>Top Level Domain:</strong>
            {' '}
            {countrieData.tld && countrieData.tld[0]}
          </p>
          <p>
            <strong>Currencies:</strong>
            {' '}
            {countrieData.currencies && (
              Object.values(
                countrieData.currencies,
              ).map(
                (currencie) => currencie.name,
              )
            ).join(', ')}
          </p>
          <p>
            <strong>Languages:</strong>
            {' '}
            {countrieData.languages && (
              Object.values(
                countrieData.languages,
              ).map(
                (language) => language,
              )
            ).join(', ')}
          </p>
        </div>
      </div>
      <div className="more_infos">
        <p>Border Countries:</p>
        {countrieData.borders && countrieData
          .borders
          .map((border) => <span>{border}</span>)}
      </div>
    </section>
  </CD>
);
