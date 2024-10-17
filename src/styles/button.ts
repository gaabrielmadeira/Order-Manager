import styled, { css } from 'styled-components';
import { TextButton, textButtonProps } from './typograph';

interface ButtonProps extends textButtonProps {
  buttonStyle: 'open' | 'close' | 'order';
}

export const StyledButtons = css<ButtonProps>`
  width: 167px;
  height: 40px;
  border-radius: 8px;
  ${TextButton}
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case 'open':
        return css`
          background-color: var(--color-button-open);
        `;
      case 'close':
        return css`
          background-color: var(--color-details);
        `;
      case 'order':
        return css`
          background: transparent;
          border-color: var(--color-details);
        `;
    }
  }}
`;

export const StyledOpenCloseButton = styled.span<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${StyledButtons}
`;
