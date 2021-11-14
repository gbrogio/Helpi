import { createGlobalStyle } from 'styled-components';

export const ScrollBar = createGlobalStyle`
  ::-webkit-scrollbar{
    width: 16px;
    height: 16px;
  }
  ::-webkit-scrollbar-corner {
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(var(--ScrollBar), 0.7); // rgba(20, 20, 20, 0.7)
    min-height: 40px;

    transition: .2 ease-in-out;
    :hover {
      background-color: rgba(var(--ScrollBar), 1); // rgb(20, 20, 20)
    }
  }
  ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-track {
    border: 5px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .3);
  }
`;
