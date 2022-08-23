import Head from 'next/head'
import styles from '../../styles/home.module.scss'
import Image from 'next/image'
import logoImg from '../../public/logo.svg'
import { Input } from '../components/ui/input'

export default function Home() {
  return (
    <>
      <Head>
        logoImg
        <title>Pizzoares - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo sujeitopizzaria" />

        <div className={styles.login}>
          <form>
            <Input placeholder="seu email" type="text" />
            <Input placeholder="sua senha" type="password" />
          </form>
        </div>
      </div>
    </>
  )
}
