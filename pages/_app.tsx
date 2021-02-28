import Head from 'next/head'
import React, { FC } from 'react'
import '@assets/globals.css'
import { AppProps } from 'next/app'

const Noop: FC = ({ children }) => <>{children}</>

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Head>
        <title>Administration | Butik Kærlighilsen</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App