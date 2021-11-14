import styled from 'styled-components';

export const BigTitle = styled.h1`
  font-size: 5rem;


  &.link {
    cursor: pointer;
    :hover{
      text-decoration: underline;
    }
    @media screen and (max-width: 420px) {
      font-size: 4rem;
      @media screen and (max-width: 326px) {
        font-size: 3.5rem;
      }
    }
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
`;
export const SmallTitle = styled.h1`
  font-size: 1.3rem;
`;

export const SubTitle = styled.h2`
  font-size: 22px;
  opacity: 0.5;
  font-weight: 400;
`;
export const P = styled.p`
  line-height: 26px;
  font-weight: 500;
  font-size: 1rem;
  opacity: 0.8;
  display: inline;
  .bold {
    font-size: .8rem;
    font-weight: bold;
  }
  .red{
    color: rgba(var(--Red, .5)); // rgba(234,29,44, .5)
  }
`;
export const A = styled.a`
  font-size: 19px;
  font-weight: 400;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  padding: 0 5px;
  color: rgb(143,143,238);

  :hover {
    opacity: 1;
  }
`;
