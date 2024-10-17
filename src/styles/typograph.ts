import styled from 'styled-components';
import { css } from 'styled-components';

export const TitleOne = styled.h1`
  font-family: var(--font-secundary);
  font-size: var(--font-size-1);
  font-weight: var(--font-bold);
  color: var(--color-details);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TextOne = css`
  font-family: var(--font-primary);
  font-weight: var(--font-medium);
  font-size: var(--font-size-3);
  color: var(--color-grey-3);
`;

export const TextTwo = styled.p`
  font-family: var(--font-secundary);
  font-weight: var(--font-medium);
  font-size: var(--font-size-4);
  color: var(--color-white);
`;

export const TextOption = styled.option`
  font-family: var(--font-primary);
  font-size: var(--font-size-2);
  font-weight: var(--font-semibold);
  color: var(--color-grey-3);
`;

export const PlaceHolderText = css`
  &::placeholder {
    font-family: var(--font-primary);
    font-size: var(--font-size-4);
    font-weight: var(--font-light);
    color: var(--color-grey-3);
  }
`;

export interface textButtonProps {
  textButtonStyle: 'finishOrder' | 'openClose';
}

export const TextButton = css<textButtonProps>`
  font-size: var(--font-size-3);
  font-family: var(--font-secundary);
  font-weight: var(--font-bold);
  ${({ textButtonStyle }) => {
    switch (textButtonStyle) {
      case 'finishOrder':
        return css`
          color: var(--color-details);
        `;
      case 'openClose':
        return css`
          color: var(--color-grey-3);
        `;
    }
  }}
`;
