import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html style={{ scrollBehavior: "smooth" }}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
          <link rel="icon" href="/icon.ico" />
          <link rel="icon" href="/favicon.png" />

          <link rel="alternate icon" href="/icon.ico" type="image/x-icon" sizes="16x16"></link>
          <link rel="shortcut icon" href="/icon.ico" type="image/x-icon" sizes="16x16"></link>

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
