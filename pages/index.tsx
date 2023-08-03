import Head from 'next/head'
import Home from '@/container/home/Home'
import Navbar from '@/components/navbar/Navbar';

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Home />
      </main>
    </>
  )
}
