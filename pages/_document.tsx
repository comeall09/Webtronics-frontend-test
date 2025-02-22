import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <link
        href='https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600&display=swap'
        rel='stylesheet'
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
