import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a className="no-underline hover:underline">this page!</a>
          </Link>
        </h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}
