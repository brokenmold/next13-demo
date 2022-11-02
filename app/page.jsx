import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.jsx</code>
        </p>


        <div className={styles.grid}>

          {/* Docs */}
          <a className={styles.card} href="https://beta.nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Interactive Beta Docs for Next.js 13+</p>
          </a>

          {/* SCSS Modules */}
          <a className={styles.card} href="https://beta.nextjs.org/docs/styling/sass">
            <h2>SCSS Modules &rarr;</h2>
            <p>Component-level SASS/SCSS via CSS Modules</p>
          </a>

        </div>

      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

    </div>
  )
}
