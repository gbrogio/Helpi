import { createContext, useEffect, useState } from 'react';
import { setCookie, destroyCookie } from 'nookies';

import { authParams } from '../lib/firebase';

const AuthContext = createContext(null);

const formatUser = (user) => ({
  name: user.displayName,
  photo: user.photoURL,
  uid: user.uid,
});

export const AuthProvider = function ({ children }) {
  const [isUser, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const setSession = (session) => {
    if (session) {
      setCookie(undefined, 'HELPI_COOKIE', session, {
        maxAge: 1 * 365 * 24 * 60 * 60 * 1000,
        path: '/',
      });
    } else {
      destroyCookie(undefined, 'HELPI_COOKIE');
    }
  };

  const handleUser = async (currentUser) => {
    if (currentUser) {
      const formattedUser = formatUser(currentUser);
      await setUser(formattedUser);
      setSession(currentUser.accessToken);

      return currentUser.displayName;
    }
    setUser(null);
    setSession(false);

    return false;
  };

  const signInGoogle = () => {
    try {
      setLoading(true);
      authParams.signInWithRedirect(authParams.auth, authParams.providers.google)
        .then((result) => {
          const { user } = result;
          handleUser(user);
        });
    } finally {
      setLoading(false);
    }
  };
  const signOut = () => {
    try {
      setLoading(true);
      authParams.signOut(authParams.auth).then(() => {
        destroyCookie(undefined, 'HELPI_COOKIE');
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unSubscribe = authParams.onIdTokenChanged(authParams.auth, handleUser);

    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      isUser,
      isLoading,
      signInGoogle,
      signOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
