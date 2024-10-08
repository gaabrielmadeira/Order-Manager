import styled, { css } from 'styled-components';

export const titleOne = styled.h1`
  font-family: var(--font-secundary);
  font-size: var(--font-size-1);
  font-weight: var(--font-bold);
  color: var(--color-grey-3);
`;

export const titleTwo = styled.h2`
  font-family: var(--font-primary);
  font-weight: var(--font-medium);
  font-size: var(--font-size-3);
  color: var(--color-grey-3);
`;

export const labelText = styled.label`
  font-family: var(--font-primary);
  font-size: var(--font-size-2);
  font-weight: var(--font-semibold);
  color: var(--color-grey-3);
`;

export const placeHolderText = css`
  &::placeholder {
    font-family: var(--font-primary);
    font-size: var(--font-size-4);
    font-weight: var(--font-light);
    color: var(--color-grey-3);
  }
`;
