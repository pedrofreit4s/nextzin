import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../source/components/Portfolio/Footer'
import Navbar from '../../source/components/Portfolio/Navbar'
import styles from '../../source/styles/portfolio.module.scss'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>WPloy — Portfólio</title>
      </Head>
      <Navbar />
      <div className={styles.apresentation}>
        <div className="container height-100">
          <div className={styles.row}>
            <div className={styles.texts}>
              <h5>portfólio</h5>
              <h2>
                Não é só telinhas bonitas, são experiências inesqueciveis!
              </h2>
            </div>
            <div className={styles.vector}>
              <Image width={416} height={217} src={'/vector.svg'} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.portfolio}>
        <div className="container">
          <div className={styles.categories}>
            <button className={'styles.categoryActive'}>Todos</button>
            <button className={styles.categoryActive}>Websites</button>
            <button className={''}>Aplicativos</button>
          </div>
          <div className={styles.portfolioCarsRow}>
            <div className={styles.card}>
              <img src="/xd-011.png" alt="" />
              <div>
                <h3>TBS Platafom</h3>
                <p>
                  Uma plataforma de hospedagem de sites e aplicativos NODE.JS,
                  Ba[...]
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/xd-011.png" alt="" />
              <div>
                <h3>TBS Platafom</h3>
                <p>
                  Uma plataforma de hospedagem de sites e aplicativos NODE.JS,
                  Ba[...]
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/xd-011.png" alt="" />
              <div>
                <h3>TBS Platafom</h3>
                <p>
                  Uma plataforma de hospedagem de sites e aplicativos NODE.JS,
                  Ba[...]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
