import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  font-size: 30px;
  color: white;
  transform: translateY(15vh);

  span::after {
    animation: loading 2s infinite linear;
    content: "";
  }

  @keyframes loading {
    0% {
      content: ""
    }
    25% {
      content: "."
    }
    50% {
      content: ".."
    }
    75% {
      content: "..."
    }
    100% {
      content: ""
    }
  }
`;
