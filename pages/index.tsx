import React, { FC } from 'react'
import Head from 'next/head'

const HeroSection = () => (
  <div className="min-h-screen bg-green-300 flex items-center justify-center">
    <div className="bg-gray-800 rounded-full h-52 w-52 flex items-center justify-center shadow-2xl">
      <h1 className="text-green-300 uppercase text-3xl text-center">
        Butik <br /> kærlig <br />
        hilsen
      </h1>
    </div>
  </div>
)
const Navbar = () => (
  <div className="py-3 shadow-lg">
    <ul className="hidden md:flex px-4 md:px-40 flex-row justify-between box-border max-w-6xl mx-auto">
      <li className="uppercase text-md">Om os</li>
      <li className="uppercase text-md">Blomster</li>
      <li className="uppercase text-md">Delikatesser</li>
      <li className="uppercase text-md">Kontakt</li>
    </ul>
    <div className="px-4 py-1 display md:hidden">
      <div className="max-w-min flex flex-col space-y-1 content-between bg-white">
        <div className="h-0.5 w-4 bg-gray-600" />
        <div className="h-0.5 w-4 bg-gray-600" />
        <div className="h-0.5 w-4 bg-gray-600" />
      </div>
    </div>
  </div>
)

interface HighlightProps {
  textDirection: 'left' | 'right'
  title: string
  description: string
  imageUrl: string
}
const Highlight: FC<HighlightProps> = (props) => {
  const contentOrder = (
    textIsLeft: boolean,
    description: string,
    imageUrl: string
  ) => {
    if (textIsLeft) {
      return (
        <>
          <p className="col-span-5 text-gray-700 text-justify row-span-1 row-start-3 md:row-start-2 md:row-span-2 md:col-span-3">
            {description}
          </p>
          <img
            src={imageUrl}
            className="bg-black w-full h-full col-span-5 object-cover row-start-1 row-span-1 md:row-start-2 md:row-span-2 md:col-span-2"
          />
        </>
      )
    } else {
      return (
        <>
          <img
            src={imageUrl}
            className="bg-black w-full h-full col-span-5 object-cover row-start-1 row-span-1 md:row-start-2 md:row-span-2 md:col-span-2"
          />
          <p className="col-span-5 text-gray-700 text-justify row-span-1 row-start-3 md:row-start-2 md:row-span-2 md:col-span-3">
            {description}
          </p>
        </>
      )
    }
  }

  return (
    <div className="px-4 md:px-40 grid grid-cols-5 auto-rows-max gap-4 md:gap-8 max-w-6xl mx-auto">
      <h2
        className={`uppercase underline text-3xl text-green-300 col-span-5 row-start-2 md:row-start-1 ${
          props.textDirection === 'right' ? 'md:text-right' : ''
        }`}
      >
        {props.title}
      </h2>
      {contentOrder(
        props.textDirection === 'left',
        props.description,
        props.imageUrl
      )}
    </div>
  )
}
const Footer = () => (
  <div className="bg-green-300 py-16">
    <div className="px-4 md:px-40 grid auto-rows-max grid-cols-3 gap-8 md:gap-4 max-w-6xl mx-auto">
      <div className="row-start-1 col-span-3 md:col-span-1 md:row-span-3 text-center md:text-left">
        <h4>Contact</h4>
        <ul>
          <li>some</li>
          <li>text</li>
          <li>oh</li>
          <li>yes</li>
          <br />
          <li>yes</li>
          <br />
          <li>yes</li>
        </ul>
      </div>
      <div className="row-start-2 col-span-3 md:col-span-1 md:row-span-3 justify-self-center">
        <h4 className="text-center">Åbningstider</h4>
        <ul>
          <li className="flex justify-between">
            <span>Mandag-Torsdag</span>
            <span>Lukket</span>
          </li>
          <hr />
          <li className="flex justify-between">
            <span>Fredag</span>
            <span>17-21</span>
          </li>
          <hr />
          <li className="flex justify-between">
            <span>Lørdag-Søndag</span>
            <span>14-20</span>
          </li>
          <hr />
        </ul>
      </div>
      <div className="row-start-3 col-span-3 md:col-span-1 md:row-span-3 text-center md:text-right">
        <h4 className="">Find os</h4>
        <ul className="">
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  </div>
)

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Butik Kærlighilsen</title>
    </Head>

    <main>
      <HeroSection />
      <Navbar />
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
