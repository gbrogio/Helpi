import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    overflow: overlay;
    background: var(--background);
    color: var(--text);
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
  }

  h1 {
    font-family: "Elsie Swash Caps", cursive;
    font-weight: 900;
  }
`;
