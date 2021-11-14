import React, { useEffect, useState } from 'react';
import useAuth from 'backend/hook/useAuth';
import smoothScrollTo from '../../scripts/Navigate';
import {
  Container,
  LogoContainer,
  NavLinksContainer,
  SingMethContainer,
  CheckMobileMenu,
  HamburgerMobileMenu,
  LogoImg,
  UserContainer,
  DropDowIcon,
  DropDowCheck,
  SingOutIcon,
} from './styles';
import {
  ContainerLk,
} from './stylesLink';
import SingButtons from '../SingButtons';

interface lkProps {
  Id?: string,
  lkType: 'externalLink' | 'internalLink',
  To: string,
}

export const LinkCp: React.FC<lkProps> = function ({
  To, lkType, children, Id,
}) {
  useEffect(() => {
    const menuItems = document.querySelectorAll('#LinkComp');
    const menuBtn = document.getElementById('menuBtn') as HTMLInputElement;
    function getScrollTopByHref(element) {
      const id = element.getAttribute('href');
      return document.getElementById(id).offsetTop;
    }
    function toggleScroll() {
      if (menuBtn.checked === true) {
        document.documentElement.style.overflow = 'hidden';
      } else if (menuBtn.checked === false) {
        document.documentElement.style.overflow = 'scroll';
      }
    }
    menuBtn.addEventListener('change', () => toggleScroll());

    menuItems.forEach((item) => {
      item.childNodes.forEach((child) => {
        child.addEventListener('click', (event) => {
          menuBtn.checked = false;
          toggleScroll();
          event.preventDefault();
          const to = getScrollTopByHref(event.currentTarget) - 90;
          smoothScrollTo(0, to, 500);
        });
      });
    });
  });

  return (
    <div id="LinkComp">
      <ContainerLk
        href={To}
        id={Id}
      >
        {children}
      </ContainerLk>
    </div>
  );
};

const HeaderCp: React.FC = function () {
  const { isUser, signOut } = useAuth();
  useEffect(() => {
    const HeaderComp = document.querySelector<HTMLElement>('div#Header');
    document.addEventListener('scroll', () => {
      const PosY = window.scrollY;
      if (PosY >= 10) {
        HeaderComp.style.backgroundColor = 'rgb(255, 255, 255, .95)';
      } else {
        HeaderComp.style.backgroundColor = 'transparent';
      }
    });
  });

  return (
    <Container>
      <div id="Header">
        <LogoContainer>
          <div className="companyLogo">
            <LogoImg />
          </div>
          <p>
            <p className="companyName">
              H•E•L•P•I
            </p>
            <p className="companySlogan">
              Preparando você
              {' '}
              <br/>
              {' '}
              para o Hoje!
            </p>
          </p>
        </LogoContainer>

        <CheckMobileMenu type="checkbox" id="menuBtn" className="menuBtn" />

        <NavLinksContainer className="NavLinks">
          <LinkCp Id="LinkCp Home" lkType="internalLink" To="#Home">Início</LinkCp>
          <p className="separator">/</p>

          <LinkCp Id="LinkCp About" lkType="internalLink" To="#About">Quem Somos</LinkCp>
          <p className="separator">/</p>

          <LinkCp Id="LinkCp Courses" lkType="internalLink" To="#Courses">Cursos</LinkCp>
          <p className="separator">/</p>

          <LinkCp Id="LinkCp Testimony" lkType="internalLink" To="#Testimony">Depoimentos</LinkCp>
        </NavLinksContainer>

        <HamburgerMobileMenu htmlFor="menuBtn" className="menuIcon">
          <span className="menuLine"/>
        </HamburgerMobileMenu>

        {isUser ? (
          <UserContainer>
            <p>{isUser.name}</p>

            <img src={isUser.photo} alt="" srcSet="" />

            <DropDowCheck type="checkbox" id="dropDow" />
            <label className="dropDow" htmlFor="dropDow">
              <DropDowIcon />
            </label>

            <div
              className="DropDowMenu"
              onClick={() => signOut()}
            >
              Sair
              {' '}
              <SingOutIcon />
            </div>
          </UserContainer>
        ) : (
          <SingMethContainer>
            <SingButtons Provider="Google">Entrar com Google</SingButtons>
          </SingMethContainer>
        )}
      </div>
    </Container>
  );
};

export default HeaderCp;
