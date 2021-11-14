import styled from 'styled-components';
import Texture from '../../assets/svg/Texture.svg';

export const Container = styled.div`
  footer.footer {
    height: 40px;
    width: 100vw;
    margin-top: 10%;
    background-color: var(--Green);

    > .container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  height: 100vh;
  width: 100vw;

  > .textureContainer {
    z-index: -1;
    position: absolute;
  }
`;

export const TextureSvg = styled(Texture)`
  width: 100vw;
  height: 100vh;
`;
