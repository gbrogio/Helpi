import { createGlobalStyle } from 'styled-components';

export const Colors = createGlobalStyle`
  :root{
    --Blue:            74, 107, 246;// rgb(74, 107, 246)
    --Red:             234, 29, 44; // rgb(234,29,44)
    --Purple:          111, 51, 187; // rgb(111, 51, 187)
    --Orange:          247, 160, 0; // rgb(247, 160, 0)
    --GreenLight:      182, 208, 72; // rgb(182,208,72)
    --Pink:            249, 135, 156; // rgb(249,135,156)
    --Yellow:          246, 213, 83; // rgb(246,213,83)
    --GreenRGB:        141, 206, 151; // rgb(141, 206, 151)
    --Green:           #8DCE97;
    --Gray:            #717171;

    --background:      #FFF;
    --background-gray: #FDFDFD;
    --text:            #212121;

    --ScrollBar: 20, 20, 20; // rgb(20, 20, 20)
  }
`;
