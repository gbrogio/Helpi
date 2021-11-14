import React, { useEffect, useState } from 'react';
import { P } from 'styles/components/Text';
import {
  Container, CloseIcon,
} from './styles';

interface alertProps {
  closeModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const AlertCp: React.FC<alertProps> = function ({ children, closeModal }) {
  const CloseModal = (elem) => {
    elem.style.display = 'none';
    closeModal(false);
  };

  return (
    <Container
      id="alert"
      role="alert"
      style={{
        position: 'fixed', top: 0, right: 0, zIndex: 600, width: '95%',
      }}
      onClick={
        (e) => {
          CloseModal(e.currentTarget);
        }
      }
    >
      <CloseIcon />
      <div>
        <h1>&#9432;</h1>
        <span />
        <P>{children}</P>
      </div>
    </Container>
  );
};

export default AlertCp;
