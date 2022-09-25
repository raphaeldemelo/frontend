import {
  GetServerSideProps,
  GetServerSideContext,
  GetServerSidePropsResult,
} from 'next'

import { parseCookies } from 'nookies'

//função para páginas que só podem ser acessadas por visitantes

export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSideContext): Promise<GetSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    // se o cara tentar acessar a pagina, porem tendo um login salvo,redirecionamos
    if (cookies['@nextauth.token']) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    }

    return await fn(ctx)
  }
}
