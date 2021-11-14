import styled from 'styled-components';
import { KeyboardArrowDown } from '@styled-icons/material-twotone/KeyboardArrowDown';
import { LogOut } from '@styled-icons/ionicons-outline/LogOut';
import Logo from '../../assets/svg/Logo.svg';

export const Container = styled.header`
  width: 100vw;
  height: 88px;
  z-index: 500;
  position: fixed;
  top: 0;

  > div {
    padding: 1rem 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    box-shadow: inset 0 -2px 0 var(--text), 0 0 1rem var(--text);
    transition: all .3s ease-in-out;

    @media screen and (max-width: 334px) {
      padding: 1rem 5%;

      @media screen and (max-width: 275px){
        padding: 1rem .2rem;

      }
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  > p {
    cursor: default;
    > p.companyName {
      font-size: 1.1rem;
      opacity: .7;
      font-weight: bold;
      letter-spacing: .5rem;
    }
    > p.companySlogan {
      font-size: .9rem;
      opacity: .7;
      font-weight: bold;
    }
  }
`;

export const NavLinksContainer = styled.nav`
  z-index: 2;

  display: flex;
  align-items: center;

  p {
    cursor: default;
    font-weight: bold;
    font-size: .8rem;
    opacity: .7;
    display: block;
    padding: 5px 5px;
  }
  @media screen and (max-width: 1045px) {
    transition: opacity .5s 0s, transform 1s 0s;
    font-size: 2rem;

    display: flex;
    position: fixed;
    top: 0rem;
    left: 0rem;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgb(255, 255, 255, .9);

    opacity: 0;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: overlay;
    transform: translateX(100%);
  }
`;

export const SingMethContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1190px) {
    position: absolute;
    top: calc(88px + 1rem);
    left: 50%;
    transform: translateX(-50%);
    background: rgb(255, 255, 255, .9);
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 212px;
  position: relative;
  > p {
    width: 250px;
    margin-left: 1rem;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
  }
  > img {
    width: 50px;
    border-radius: 50%;
    border: 2px solid var(--text);
  }
  > label {
    transition: transform .2s ease-in-out;
  }

  > div.DropDowMenu{
    position: absolute;
    display: none;
    width: 10rem;
    height: 3rem;
    background-color: var(--background);
    top: 4rem;
    right: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    cursor: pointer;
    box-shadow: 0 0 .5rem var(--text);
    border-radius: 5px;
  }
  @media screen and (max-width: 1190px) {
    position: absolute;
    top: calc(88px + 1rem);
    left: 50%;
    transform: translateX(-50%);
    background: rgb(255, 255, 255, .9);
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
    > div.DropDowMenu{
      position: absolute;
      display: none;
      width: 10rem;
      height: 3rem;
      background-color: var(--background);
      top: 4.5rem;
      left: 55%;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      cursor: pointer;
      box-shadow: 0 0 .5rem var(--text);
      border-radius: 5px;

      @media screen and (max-width: 432px) {
        left: 50%;
      }
      @media screen and (max-width: 365px) {
        left: 45%;
      }
      @media screen and (max-width: 335px) {
        left: 40%;
      }
      @media screen and (max-width: 305px) {
        left: 35%;
      }
      @media screen and (max-width: 395px) {
        left: 30%;
      }
      @media screen and (max-width: 252px) {
        left: 25%;
      }
      @media screen and (max-width: 232px) {
        left: 20%;
      }
      @media screen and (max-width: 225px) {
        left: 15%;
      }
    }
  }
`;
export const SingOutIcon = styled(LogOut)`
  width: 2rem;
  cursor: pointer;
  z-index: 605;
`;
export const DropDowIcon = styled(KeyboardArrowDown)`
  width: 2rem;
  cursor: pointer;
  z-index: 605;
`;
export const DropDowCheck = styled.input`
 display: none;
 :checked ~ .DropDowMenu{
  display: flex;
 }
 :checked ~ .dropDow{
  transform: rotate(-180deg);
 }
`;

export const CheckMobileMenu = styled.input`
 display: none;
  :checked ~ .menuIcon{
    display: flex;
    border-radius: 50%;
    position: absolute;
    right: 1rem;
    transition: 0.8s ease-in-out;

    > span{
      animation: openMid .8s forwards;

      ::before{
        animation: openTop .8s forwards;
      }
    }
  }
  :checked ~ nav.NavLinks {
    opacity: 1;
    transform: translateX(0);

    a{
      transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform: translateX(0);
      transition-delay: 0.6s;
    }
  }

  @keyframes RightToLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes openTop {
    0%{
      transform: translateY(-5px)
      rotate(0deg);
    }
    50%{
      transform: translateY(0px)
      rotate(0deg);
    }
    100%{
      width: 100%;
      transform: translateY(0px)
      rotate(90deg);
    }
  }
  @keyframes openMid {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(45deg);
    }
  }
`;

export const HamburgerMobileMenu = styled.label`
  position: relative;
  padding: 26px 10px;
  cursor: pointer;
  z-index: 2;
  display: none;

  > span {
    display: block;
    position: relative;
    background: var(--Green);
    height: 4px;
    width: 30px;
    border-radius: 1px;
    animation: closeMid .8s reverse;
    transition: background .8s ease;

    ::before{
      content: '';
      background: var(--Green);
      position: absolute;
      height: 100%;
      width: 50%;
      border-radius: 1px;
      transform: translateY(-10px);
      animation: closeTop .8s reverse;
      transition: background .8s ease;
    }
  }
  @media screen and (max-width: 1045px) {
    display: flex;
    position: relative;
    top: calc(.5rem - 4.5px);
    transition: 0.8s ease-in-out;

    > span{
      animation: closeMid 0.5s backwards;
      animation-direction: reverse;
      ::before{
        animation: closeTop .8s backwards;
        animation-direction: reverse;
      }
    }
  }

  @keyframes closeTop {
    0%{
      transform: translateY(-5px)
      rotate(0deg);
    }
    50%{
      transform: translateY(0px)
      rotate(0deg);
    }
    100%{
      width: 100%;
      transform: translateY(0px)
      rotate(90deg);
    }
  }
  @keyframes closeMid {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(45deg);
    }
  }
`;

export const LogoImg = styled(Logo)`
  cursor: pointer;
  width: 60px;
  height: 70px;

  > image {
    width: 60px;
    height: 70px;
  }
`;
