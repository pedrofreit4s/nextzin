import styles from './styles.module.scss'

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className="container height-100">
        <div className={styles.row}>
          <div className={styles.logo}>
            <h4>AtlasNetwork</h4>
          </div>
          <div className={styles.info}>informações SOBRE NÓS — Saiba mais</div>
          <div className={styles.support}>
            <i className="bx bx-phone"></i> Atendimento
          </div>
        </div>
      </div>
    </div>
  )
}
