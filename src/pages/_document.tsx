import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        {/* HEAD EXTEND */}
        <Head>
          {/* METAS */}
          <meta charSet="UTF-8" />

          {/* FONTS */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />

          {/* LOGO */}
          <link rel="icon" href="/logo.png" />
        </Head>

        {/* BODY EXTENDS */}
        <body>
          <Main />
          <NextScript />

          {/* SCRIPTS */}
        </body>
      </Html>
    );
  }
}
