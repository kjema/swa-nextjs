import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document<unknown> {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
