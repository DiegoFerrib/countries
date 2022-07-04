import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return null;

  return (
    <Container>
      <span>Loading</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
