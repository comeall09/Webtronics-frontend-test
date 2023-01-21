import { Inter } from "@next/font/google"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"

import { store } from "src/store"
import "styles/globals.scss"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  )
}
