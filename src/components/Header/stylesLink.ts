import styled from 'styled-components';

export const ContainerLk = styled.a`
  font-weight: 500;
  font-size: inherit;
  overflow: hidden;
  display: block;
  position: relative;
  opacity: .7;
  padding: 10px 5px;
  text-decoration: none;
  color: var(--text);

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: var(--text);
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: translate3d(-100%, 0, 0);
  }

  &.New{
    display: flex;
    align-items: center;
    padding: 5px 5px;
    ::after{
      background-color: rgb(var(--Orange));
    }
    :hover::after, :focus::after{
      background-color: rgb(var(--Orange));
    }
    > span {
      > p {
        font-style: italic;
        cursor: pointer;
        font-family: Helvetica, sans-serif;
        font-size: 1rem;
        opacity: 1!important;
        margin-right: 5px;
        color: rgb(var(--Orange));
      }
    }
  }
  :hover::after, :focus::after{
    opacity: 1;
    transform: translate3d(0, 0, 0);
    background-color: var(--Green);
  }
  :hover{
    opacity: 1;
  }

  &.activeLink {
    font-weight: bold;
    opacity: 1;
    padding: 5px 5px;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--Green);
      opacity: 1;
      transition: opacity 300ms, transform 300ms;
      transform: translate3d(0, 0, 0);
    }

    &.New{
      padding: 1.9rem 0;
      ::after{
        background-color: rgb(var(--Orange));
      }
    }
  }
`;
