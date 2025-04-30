import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Multi-brand Parallax Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
        <h1 className={styles.title}>Benvenuto nel mondo dei nostri tre brand</h1>

        <section className={`${styles.parallax} ${styles.tchavana}`}>
          <div className={styles.content}>
            <h2>Tchavana</h2>
            <p>Acqua di montagna pura e rigenerante.</p>
          </div>
        </section>

        <section className={`${styles.parallax} ${styles.cellagrande}`}>
          <div className={styles.content}>
            <h2>Cellagrande</h2>
            <p>Vini eleganti dai vigneti collinari.</p>
          </div>
        </section>

        <section className={`${styles.parallax} ${styles.risodoria}`}>
          <div className={styles.content}>
            <h2>Riso Doria</h2>
            <p>Il riso delle nostre risaie di pianura.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
