/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const Countrie = ({
  flags, name, population, region, capital,
}) => (
  <CountrieInfo>
    <img src={flags.svg} alt={`${name.common} flag.`} />
    <div className="informations">
      <h2>{name.common}</h2>
      <p>
        <strong>Population:</strong>
        {' '}
        {population.toLocaleString('en-US')}
      </p>
      <p>
        <strong>Region:</strong>
        {' '}
        {region}
      </p>
      <p>
        <strong>Capital:</strong>
        {' '}
        {capital}
      </p>
    </div>
  </CountrieInfo>
);

const CountrieInfo = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  height: 400px;
  box-shadow: 0px 0px 10px 4px rgba(151,151,151,0.1);
  background-color: ${({ bgColor }) => bgColor};
  transition: 400ms;
  animation: animation 500ms;

  @keyframes animation {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  .informations {
    padding: 15px;
    color: ${({ fontColor }) => fontColor};
    transition: none;

    h2 {
      font-size: clamp(2rem, 5vw, 2.8rem);
      margin-bottom: 8px;
    }

    p {
      font-size: clamp(1.2rem, 2.5vw, 2rem);
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
