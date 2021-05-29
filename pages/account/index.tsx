import Head from 'next/head'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import styles from '../../source/styles/account.module.scss'

export default function Account() {
  const router = useRouter()
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailRef.current.value) {
      return alert('Email address is required')
    }
  }

  return (
    <>
      <Head>
        <title>Stores — Access your account</title>
      </Head>
      <div className={styles.account}>
        <div className={styles.header}>
          <div className="container">
            <button onClick={() => router.back()}>
              <i className="bx bx-arrow-back"></i> Voltar
            </button>
          </div>
        </div>
        <div className={styles.containerAccount}>
          <h3>Welcome Back!</h3>
          <p>The decentralized web expects</p>
          <form onSubmit={handleSubmit} className={styles.formOne}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>
              {/* <div className={styles.qrCode}>
                <i className="bx bx-bar-chart-square"></i>
              </div> */}
            </div>
            <button>Unlock</button>
            <h4>
              Restore account? <span>import using account seed</span>
            </h4>
          </form>
        </div>
      </div>
    </>
  )
}
