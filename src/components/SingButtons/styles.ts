import styled from 'styled-components';
import Google from '../../assets/svg/Google.svg';

export const Container = styled.div`
  background-color: var(--background);
  box-shadow: .1rem .1rem .2rem rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  width: 212px;
  align-items: center;
  padding: .5rem .5rem;
  cursor: pointer;
  transition: .2s ease-in-out;

  :hover {
    box-shadow: .15rem .15rem .1rem rgba(0, 0, 0, 0.45);
  }

  :active {
    box-shadow: 0rem 0rem .1rem rgba(0, 0, 0, 0.45);
    transform: translateX(.15rem);
  }
`;

export const GoogleIcon = styled(Google)`
  width: 30px;
  height: 30px;
`;
