import styled from 'styled-components';
import background from '../../assets/background.svg';

export const StyledCarousel = styled.div`
  width: 100%;
  height: 450px;

  background-image: url(${background});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  position: absolute;
  top: 0;
`;
