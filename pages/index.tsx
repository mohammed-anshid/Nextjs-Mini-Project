import Head from "next/head"
import Link from "next/link"
import Style from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
      <title>Next List | Home</title>
      <meta name="description" content="anshy" />
    </Head>
    <h1 className={Style.title}>HomePage</h1>
    <p className={Style.text}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
    
    <Link legacyBehavior href={'/students'}><a className={Style.btn}>See Student List</a></Link>
    <br/>
    </>
  )
}
