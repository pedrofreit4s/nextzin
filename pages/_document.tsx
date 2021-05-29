import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pr-BR">
        <Head>
          <meta
            name="description"
            content="A simple website ecommerce template!"
          />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="language" content="PT-BR" />
          <meta name="author" content="Pedro Freitas" />
          <meta name="owner" content="Pedro Freitas" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}
