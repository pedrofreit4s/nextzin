import { useRouter } from 'next/router'
import styles from './styles.module.scss'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className={styles.navbar}>
      <div className="container height-100">
        <div className={styles.navMenu}>
          <li className={styles.active}>Página inicial</li>
          <li>Quem somos</li>
          <li>Produtos</li>
          <li>Blog</li>
          <li>Contato</li>
        </div>
      </div>
    </nav>
  )
}
