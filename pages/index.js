import Head from 'next/head'
import Image from 'next/image'
import StartScreen from '../Components/StartScreen/StartScreen'
// import styles from '../styles/StartScreen.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>xk-portfolio</title>
        <meta name="xk-portfolio" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico?v=1.1"/>
      </Head>

      <main>
        <StartScreen />
      </main>

      <footer>
      </footer>
    </div>
  )
}
