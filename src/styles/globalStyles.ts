import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-background: #FFDFB9;
    --color-button-open: #03F20D;
    --color-details: #FE1F1F;
    --color-white: #FFFFFF;
    --color-grey-1: #474843;
    --color-grey-2: #111110;
    --color-grey-3: #070705;

    --font-primary: "Inter", sans-serif;
    --font-secundary: "Poppins", sans-serif;

    --font-size-1: 1.5rem;
    --font-size-2: 1.125rem;
    --font-size-3: 0.875rem;
    --font-size-4: 0.75rem;

    --font-bold: 700;
    --font-semibold: 600;
    --font-medium: 500;
    --font-light: 300;
  }
`;
