import React, { useEffect, useState } from 'react';
import {
  Container,
  Background,
  TextureSvg,
} from './styles';

import HeaderCp from '../Header';

const Layout: React.FC = function ({ children }) {
  return (
    <Container>
      <HeaderCp />

      <main>
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <p>Copyright &copy; Guilherme Brogio</p>
        </div>
      </footer>
      <Background>
        <div className="textureContainer">
          <TextureSvg />
        </div>
      </Background>
    </Container>
  );
};

export default Layout;
