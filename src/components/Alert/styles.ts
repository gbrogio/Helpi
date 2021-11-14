import styled from 'styled-components';
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline';

export const CloseIcon = styled(CloseCircleOutline)`
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 601;
  top: 2rem;
  right: 1.5rem;
  fill: white;
  cursor: pointer;
  transition: .2s ease-in-out;
  :hover {
    fill: rgb(var(--Red));
  }
`;
export const Container = styled.div`
> div{
  display: flex;
  background-color: rgba(var(--Orange), .8);
  border-radius: 5px;
  border: 2px solid rgb(var(--Orange));
  transition: .2s ease-in-out;
  align-items: center;
  position: absolute;
  cursor: pointer;
  top: 1.5rem;
  right: 1rem;
  height: 13rem;
  width: 30rem;
  animation: emerge 300s ease-in-out;
  transform: translateX(calc(100% + 1rem));
  padding: 1rem 1rem;
  @media screen and (max-width: 512px) {
    right: .5rem;
    @media screen and (max-width: 400px) {
      flex-direction: column;
      text-align: center;
    }
  }
}
  z-index: 600;

  h1 {
    font-size: 4rem;
    color: white;
  }

  span {
    width: 2px;
    height: 95%;
    background: rgb(var(--Orange));
    margin-left: 1rem;
    @media screen and (max-width: 400px) {
      height: 2px;
      width: 95%;
      margin: .5rem 0;
    }
  }

  p {
    opacity: 1;
    padding: 0 1rem;
    color: white;
  }

  @keyframes emerge {
    0% {
      opacity: 0;
      transform: translateX(calc(100% + 1rem));
    }
    .5% {
      opacity: 1;
      transform: translateX(0%);
    }
    99%{
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      transform: translateX(calc(100% + 1rem));
    }
  }
  @media screen and (max-width: 500px) {
    > div{
      height: auto;
      width: 100%;
    }
  }
`;
