import Head from "next/head"
import Image from "next/image"
import { About } from "src/sections/about"
import { Contact } from "src/sections/contact"
import { Gallery } from "src/sections/gallery"
import { Header } from "src/sections/header"
import { Questions } from "src/sections/questions"
import { Review } from "src/sections/review"
import { Steps } from "src/sections/steps"
import { Technologies } from "src/sections/technologies"
import { AnimationEffect } from "src/widgets/animationEffect"
import { Footer } from "src/widgets/footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Webtronics</title>
        <link rel='icon' href='assets/logo.svg' />
        <meta name='description' content='test task for Webtronics' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='layout'>
        <AnimationEffect />
        <Header />
        <About />
        <Technologies />
        <Steps />
        <Questions />
        <Review />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
