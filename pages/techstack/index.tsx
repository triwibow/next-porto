import Head from 'next/head'
import Navbar from '@/components/navbar/Navbar'
import TechStack from '@/container/techstack/TechStack'

const Index = () => {
  return (
    <>
      <Head>
        <title>Technologies Stack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <TechStack />
      </main>
    </>
  )
}

export default Index;
