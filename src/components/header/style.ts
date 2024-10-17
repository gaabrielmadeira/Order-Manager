import styled from 'styled-components';
import { PlaceHolderText } from '../../styles/typograph';

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 1.25rem;

  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1;
`;

export const StyledSearchDiv = styled.div`
  width: clamp(200px, 40vw, 300px);
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--color-grey-3);
`;

export const StyledSearch = styled.input`
  width: 100%;
  height: 100%;

  ${PlaceHolderText}
`;

export const StyledCart = styled.div`
  width: 40px;
  height: 40px;

  position: absolute;
  right: 10px;
`;

export const StyledCounter = styled.div`
  width: 15px;
  height: 15px;

  background-color: var(--color-button-open);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
