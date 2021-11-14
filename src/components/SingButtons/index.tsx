import React, { useEffect, useState } from 'react';
import useAuth from 'backend/hook/useAuth';
import {
  Container,
  GoogleIcon,
} from './styles';

interface singProps {
  Provider: 'Google',
}

const SingButtons: React.FC<singProps> = function ({ children, Provider }) {
  const { signInGoogle } = useAuth();
  return (
    <Container
      role="button"
      onClick={
        () => Provider === 'Google' && signInGoogle()
      }
    >
      <div>
        {Provider === 'Google' && <GoogleIcon viewBox="0 0 48 48" />}
      </div>

      <p>
        {children}
      </p>
    </Container>
  );
};

export default SingButtons;
