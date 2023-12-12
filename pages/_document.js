import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {


  render() {
    return (
      <Html lang="es">
        <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet" />


          <meta name="google-site-verification" content="vqR1JrGbf_OrfNp94N1r_TRIT1BKtKucQc3fr3EagG0" />
 
        </Head>
        <body> 

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
