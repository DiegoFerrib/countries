/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const Countrie = ({
  flags, name, population, region, capital,
}) => (
  <CountrieInfo flags={flags} name={name} population={population} region={region} capital={capital}>
    <img src={flags.svg} alt={`Flag: ${name.common}`} loading="lazy" />
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
  height: 380px;
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
