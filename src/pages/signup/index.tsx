import Head from 'next/head'
import styles from '../../../styles/home.module.scss'
import Image from 'next/image'
import logoImg from '../../../public/logo.svg'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

import Link from 'next/link'

export default function SignUp() {
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
          <form>
            <Input placeholder="seu nome" type="text" />
            <Input placeholder="seu email" type="text" />
            <Input placeholder="sua senha" type="password" />
            <Button type="submit" Loading={false}>
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
