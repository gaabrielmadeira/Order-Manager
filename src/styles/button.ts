import { css } from 'styled-components';
import { textButton, textButtonProps } from './typograph';

interface openCloseButtonProps extends textButtonProps {
  buttonStyle: 'open' | 'close' | 'order';
}

export const StyledOpenCloseButton = css<openCloseButtonProps>`
  width: 167px;
  height: 40px;
  border-radius: 8px;
  ${textButton}
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
