import {
  GetServerSideProps,
  GetServerSideContext,
  GetServerSidePropsResult,
} from 'next'

import { AuthTokenError } from '../services/errors/AuthTokenError'
import { parseCookies, destroyCookie } from 'nookies'

//funcao para paginas que só usuários logados podem acessar
export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSideContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    const token = cookies['@nextauth.token']

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    try {
      return await fn(ctx)
    } catch (error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(ctx, '@nextauth.token')

        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
    }
  }
}
