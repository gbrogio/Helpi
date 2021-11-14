import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import AlertCp from 'components/Alert';
import { AuthProvider } from 'backend/context/AuthContext';

import GlobalStyles from 'styles/global/Global';
import { ScrollBar } from 'styles/global/ScrollBar';
import { Colors } from 'styles/global/Colors';

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  useEffect(() => {
    if (document.getElementById('__next')) {
      const NextID = document.getElementById('__next');
      NextID.id = '__next-helpi';
    }
  });

  return (
    <AuthProvider>
      <Head>
        <meta name="description" content="GBrogio WebSite - HELPI" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <GlobalStyles />
      <ScrollBar />
      <Colors />
      <AlertCp>
        Atenção!
        <br />
        {' '}
        Essa não é uma aplicação real, isto é, os dados
        nela apresentados são falsos/inventados. Tal aplicação tem somente com objetivo
        demonstrar o meu Aprendizado durante esses meses de Curso
      </AlertCp>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
