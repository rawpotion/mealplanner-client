import React, { FC } from 'react'
import { Head } from 'next/document'

const HeroSection = () => <div>Hero</div>
const Navbar = () => <div>Navbar</div>

interface HighlightProps {
  textDirection: 'left' | 'right'
}
const Highlight: FC<HighlightProps> = (props) => (
  <div>Highlight {props.textDirection}</div>
)
const Footer = () => <div>Footer</div>

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Butik Kærlighilsen</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <HeroSection />
      <Navbar />
      <Highlight textDirection="left" />
      <Highlight textDirection="right" />
      <Highlight textDirection="left" />
      <Footer />
    </main>
  </div>
)

export default Home
