import styles from './styles.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="container height-100">
        <div className={styles.row}>
          <div className={styles.logo}>wploy.com.br</div>
          <div className={styles.menu}>
            <i className="bx bx-menu-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
