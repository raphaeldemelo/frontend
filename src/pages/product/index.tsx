import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './styles.module.scss'
import { canSSRAuth } from '../../utils/canSSRAuth'

export default function Product() {
  return (
    <>
      <Head>
        <title>Novo produto - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Novo produto</h1>

          <form className={styles.form}>
            <select>
              <option>Bebida</option>
              <option>Pizza</option>
            </select>

            <input
              className={styles.input}
              type="text"
              placeholder="Digite o nome do produto"
            />

            <input
              className={styles.input}
              type="text"
              placeholder="Digite o nome do produto"
            />

            <textarea
              className={styles.input}
              placeholder="Descreva seu produto"
            />

            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})
