import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-full min-h-screen flex-col py-2">
      <Head>
        <title>Você está offline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1>Você está offline</h1>
    <p>Conecte a internet</p>

    </div>
  )
}

export default Home
