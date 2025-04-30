import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Azienda Agricola Bagnod</title>
        <meta name="description" content="Tchavana | Cellagrande | Riso Doria - Tre mondi in un'unica esperienza agricola" />
      </Head>

      <main>
        <h1 className={styles.title}>Il viaggio dell'acqua</h1>

        <section className={`${styles.parallax} ${styles.tchavana}`}>
          <div className={styles.content}>
            <h2>Tchavana</h2>
            <p>Dalle vette della Val d'Ayas sgorga l'acqua più pura, imbottigliata direttamente dalla sorgente.</p>
            <a href="#" className={styles.linkButton}>Scopri Tchavana</a>
          </div>
        </section>

        <section className={`${styles.parallax} ${styles.cellagrande}`}>
          <div className={styles.content}>
            <h2>Cellagrande</h2>
            <p>Tra colline verdi e filari ordinati, Cellagrande produce vini autentici che raccontano il territorio.</p>
            <a href="#" className={styles.linkButton}>Scopri Cellagrande</a>
          </div>
        </section>

        <section className={`${styles.parallax} ${styles.risodoria}`}>
          <div className={styles.content}>
            <h2>Riso Doria</h2>
            <p>Nelle pianure piemontesi nasce il nostro riso: frutto di tradizione e acqua che scorre.</p>
            <a href="#" className={styles.linkButton}>Scopri Riso Doria</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Azienda Agricola Bagnod - Tutti i diritti riservati.</p>
      </footer>
    </div>
  )
}
