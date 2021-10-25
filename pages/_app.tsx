import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Kyllox</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
