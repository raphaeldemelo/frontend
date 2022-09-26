import { useState, FormEvent, useContext } from 'react'
import Head from 'next/head'
import styles from '../../../styles/home.module.scss'
import Image from 'next/image'
import logoImg from '../../../public/logo.svg'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

import Link from 'next/link'
import { toast } from 'react-toastify'

import { AuthContext } from '../../contexts/AuthContext'

export default function SignUp() {
  const { signUp } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    if (name === '' || password === '' || email === '') {
      toast.error('preencha todos os campos')
      return
    }

    setLoading(true)

    let data = {
      name,
      email,
      password,
    }

    await signUp(data)

    setLoading(false)
  }

  return (
    <>
      <Head>
        logoImg
        <title>Faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo sujeitopizzaria" />

        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="seu nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Cadastrar
            </Button>
          </form>
          <Link href="/">
            <a className={styles.text}>Já possui uma conta ? Faça login!</a>
          </Link>
        </div>
      </div>
    </>
  )
}
