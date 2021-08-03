import Head from 'next/head'
import SITE from 'config/site'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{SITE.name}</title>
        <meta name="description" content={SITE.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to {SITE.name}</h1>

        <p>TBD</p>
      </main>

      <footer>Footer here</footer>
    </div>
  )
}
