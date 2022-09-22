import { FormEvent, useContext, useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/home.module.scss'
import Image from 'next/image'
import logoImg from '../../public/logo.svg'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { toast } from 'react-toastify'

import Link from 'next/link'

import { AuthContext } from '../contexts/AuthContext'
import { sign } from 'crypto'

export default function Home() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (email === '' || password === '') {
      toast.warning('preencha os dados')
    }

    setLoading(true)

    let data = {
      email,
      password,
    }

    await signIn(data)

    setLoading(false)
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
            <Input
              placeholder="seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" Loading={loading}>
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
