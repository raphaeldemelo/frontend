import { FormEvent, useContext } from 'react'
import Head from 'next/head'
import styles from '../../styles/home.module.scss'
import Image from 'next/image'
import logoImg from '../../public/logo.svg'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import Link from 'next/link'

import { AuthContext } from '../contexts/AuthContext'
import { sign } from 'crypto'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    let data = {
      email: 'raphael@raphael.com',
      password: '123123',
    }

    await signIn(data)
  }

  return (
    <>
      <Head>
        logoImg
        <title>Pizzoares - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo sujeitopizzaria" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="seu email" type="text" />
            <Input placeholder="sua senha" type="password" />
            <Button type="submit" Loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup">
            <a className={styles.text}>Não possui uma conta ? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}
