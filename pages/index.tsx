import React from 'react'
import Head from 'next/head'
import { Footer, Highlight, NavBar, HeroSection } from '@components/ui'

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Butik Kærlighilsen</title>
    </Head>

    <main>
      <HeroSection />
      <NavBar />
      <div className="py-8 md:py-20" />
      <Highlight
        textDirection="left"
        title="Om os"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam ante, efficitur eu quam at, porttitor ultrices magna. Sed efficitur posuere mauris id tempus. Nulla malesuada velit eu dolor mattis, eget porttitor neque bibendum. Vivamus faucibus, tortor eu ultrices egestas, est enim luctus enim, at volutpat lorem nisl ut purus"
        imageUrl="https://images.unsplash.com/photo-1611095564985-89765398121e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />

      <div className="py-8 md:py-20" />
      <Highlight
        textDirection="right"
        title="Om os"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam ante, efficitur eu quam at, porttitor ultrices magna. Sed efficitur posuere mauris id tempus. Nulla malesuada velit eu dolor mattis, eget porttitor neque bibendum. Vivamus faucibus, tortor eu ultrices egestas, est enim luctus enim, at volutpat lorem nisl ut purus"
        imageUrl="https://images.unsplash.com/photo-1611095564985-89765398121e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />

      <div className="py-8 md:py-20" />
      <Highlight
        textDirection="left"
        title="Om os"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam ante, efficitur eu quam at, porttitor ultrices magna. Sed efficitur posuere mauris id tempus. Nulla malesuada velit eu dolor mattis, eget porttitor neque bibendum. Vivamus faucibus, tortor eu ultrices egestas, est enim luctus enim, at volutpat lorem nisl ut purus"
        imageUrl="https://images.unsplash.com/photo-1611095564985-89765398121e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />

      <div className="py-8 md:py-20" />

      <Footer />
    </main>
  </div>
)

export default Home
