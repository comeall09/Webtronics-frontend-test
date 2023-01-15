import { Inter } from "@next/font/google"

import type { AppProps } from "next/app"
import "styles/globals.scss"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <div className='layout'>
        <Component {...pageProps} />
      </div>
    </main>
  )
}
