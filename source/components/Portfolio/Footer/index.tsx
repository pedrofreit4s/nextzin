import styles from './styles.module.scss'

export default function Footer() {
  return (
    <div className={styles.navbar}>
      <div className="container height-100">
        <div className={styles.row}>
          <div className={styles.logo}>wploy.com.br</div>
          <div className={styles.menu}>
            <ul>
              <li>Contato</li>
              <li>Termos & Condições</li>
              <li>Sobre nós</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
