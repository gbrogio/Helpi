import styled from 'styled-components';
import BlobSvg from '../../assets/svg/Blob.svg';

export const Content = styled.section`

`;

export const Info = styled.section`
  z-index: 100;
  margin: 12rem 50% 0% 12%;

  > div.more {
    display: flex;
    margin-top: 1.5rem;

    p {
      cursor: default;
      opacity: .7;
      padding: 5px 5px;
    }
  }

  @media screen and (max-width: 1190px) {
    margin: 16rem 12% 0% 12%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px) {
      margin: 16rem .5rem 0% .5rem;
    }
  }
`;

export const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  overflow-x: hidden;

  > div {
    z-index: 1;
    position: absolute;
    top: 15%;
    left: 55%;
    > img {
      width: 60%;
      height: 60%;
    }
    @media screen and (max-width: 1190px) {
      display: none;
    }
  }
`;
export const Blob = styled(BlobSvg)`
  z-index: -1;
  opacity: .7;
  position: relative;
  left: 30%;
  object-fit: cover;
`;

export const Container = styled.section`
  padding: 0% 2%;

  &.topPadding {
    padding: 10% 15%;
    @media screen and (max-width: 860px) {
      padding: 10% 10%;

      @media screen and (max-width: 634px) {
        padding: 10% 5%;

        @media screen and (max-width: 425px) {
          padding: 10% .5rem;
        }
      }
    }
  }
  &.mediumPadding {
    padding: 0% 5%;
  }

  @media screen and (max-width: 695px) {
    padding-left: 10%;
    padding-right: 10%;
    @media screen and (max-width: 630px) {
      padding-left: 5%;
      padding-right: 5%;
      @media screen and (max-width: 595px) {
        padding-left: .5rem;
        padding-right: .5rem;
      }
    }
  }

  > div.title {
    text-align: center;
  }
  > div.curses {
    margin-top: 10%;
    display: flex;
    justify: center;
    transform: translateX(.5rem);

    @media screen and (max-width: 1140px) {
      flex-direction: column;
    }
  }
  > div.more {
    margin-bottom: 10%;
    margin-top: 1.5rem;
    text-align: center;
  }


  > div.testimonyContainer {
    margin-top: 10%;
    display: flex;

    div.detach {
      transform: translateY(-2rem);
    }
    margin-bottom: 10%;
  }
  > div.testimonyCarrousel {
    margin-top: 10%;
    .rec.rec-arrow {
      display: none;
    }
    .rec-slider-container {
      margin: 0;
    }

    .rec-dot {
      :hover {
        box-shadow: 0 0 1px 3px rgba(var(--GreenRGB), .6);
      }
      &_active {
        background-color: rgba(var(--GreenRGB), .5);
        box-shadow: 0 0 1px 3px var(--Green);
      }
    }
    margin-bottom: 10%;
  }
`;

export const Card = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 0 1rem rgba(26,26,26,.7);
  align-items: center;

  > section.image {
    padding: .5rem;
    width: 150%;
    height: 150%;

    > img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
  }
  > section.description {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    text-align: center;
    > section.image {
      width: 80%;
      height: 80%;
      @media screen and (max-width: 630px) {
        width: 90%;
        height: 90%;
        @media screen and (max-width: 595px) {
          width: 95%;
          height: 95%;
        }
      }
    }
  }
`;

export const CurseCard = styled.div`
  margin: 0rem 1rem 1rem 0;
  padding: 1rem 1rem 1rem .5rem;
  display: flex;
  background: rgb(255, 255, 255, .9);
  border-radius: 5px;
  box-shadow: inset -.2rem -.2rem 1rem var(--text), 0 0 .5rem var(--text);
  cursor: pointer;
  transition: .2s ease-in-out;
  align-items: center;
  height: 13rem;

  :hover {
    transform: scale(1.02);
    box-shadow: inset -.1rem -.1rem .5rem var(--text), 0 0 1rem var(--text);
  }
  @media screen and (max-width: 400px) {
    height: auto;
  }
`;
export const ThanksEduTech = styled.div`
  position: fixed;
  z-index: 900;
  width: 100vw;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div.overlay{
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 255, 255, .9);
  }
`;
