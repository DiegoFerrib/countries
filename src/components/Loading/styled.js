import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-size: 30px;
  color: white;
  background: rgba(0, 0, 0, 0.8);

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
