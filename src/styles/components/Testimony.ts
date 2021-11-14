import styled from 'styled-components';
import { testimonyProps } from 'components/Testimony';
import { DoubleQuotesL } from '@styled-icons/remix-editor/DoubleQuotesL';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "AuthorComment"
    "AuthorDesc";
  grid-template-columns: 22rem;
  grid-template-rows: 20rem 5rem;
  background-color: white;
  margin: 2rem;
  position: relative;
  box-shadow: 0 0 1rem var(--text);
  border-radius: 0 10px 10px 10px;

  > div {
    grid-area: AuthorDesc;
    background-color: ${(props: testimonyProps) => `${props.ColorFt}`};
    color: white;
    position: relative;
    width: 100%;
    border-radius: 0 0 10px 10px;
  }
  @media screen and (max-width: 428px) {
    grid-template-columns: auto;
    min-width: 19rem;
    margin: 2rem .5rem;

    @media screen and (max-width: 320px) {
      min-width: 17.5rem;
    }
  }
  ::before {
    z-index: 4;
    content: '';
    width: 100%;
    height: 3rem;
    position: absolute;
    background: linear-gradient(180deg, var(--background) 70%, transparent);
    top: 0;
    left: 0;
    border-radius: 10px;
  }
`;
export const Main = styled.main`
  grid-area: AuthorComment;
  padding: 3rem 2rem;
  font-family: 'Montserrat', sans-serif;
  position: relative;

  @media screen and (max-width: 428px){
    overflow-y: scroll;
    overflow: overlay;
    padding: 4rem 2rem;
  }
`;
export const QuotesIcon = styled(DoubleQuotesL)`
  z-index: 5;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  transform: translateY(-40%);
  left: -1.5rem;
`;
export const AuthorImgContainer = styled.span`
`;
export const AuthorImg = styled.img`
  width: 5rem;
  height: 5rem;
  transform: translateY(-50%);
  border-radius: 50%;
  position: absolute;
  right: 1rem;
  border: 3px solid white;
`;
export const AuthorDesc = styled.footer`
  text-align: right;
  display: grid;
  align-items: center;
  text-align: right;
  height: 100%;
  width: 100%;
  padding-right: 6.5rem;
  padding-left: 0;
  font-size: .9rem;
`;
