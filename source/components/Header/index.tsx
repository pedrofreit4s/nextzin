import { useRouter } from 'next/router'
import styles from './styles.module.scss'

export default function Header() {
  const router = useRouter()

  return (
    <div className={styles.header}>
      <div className="container height-100">
        <div className={styles.row}>
          <div className={styles.heart}>
            <i className="bx bxs-heart"></i> Lista de desejos
          </div>
          <div className={styles.search}>
            <input type="search" placeholder="O que você procura hoje?" />
          </div>
          <div
            onClick={() => router.push('/account')}
            className={styles.account}
          >
            <i className="bx bxs-user"></i> Faça o login!
          </div>
        </div>
      </div>
    </div>
  )
}
