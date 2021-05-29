import { useRouter } from 'next/router'
import { useWorkspace } from '../../../contexts/workspace'
import styles from './styles.module.scss'

export default function Profile() {
  const { item } = useWorkspace()
  const router = useRouter()

  return (
    <div className={styles.profile}>
      <div className={styles.profileUserArea}>
        <h5>Your profile</h5>
        <div className={styles.rowUserArea}>
          <div className={styles.userAreaProfile}></div>
          <div className={styles.userAreaInfos}>
            <h4>Pedro Freitas</h4>
            <p>
              <i className={item.iconClass}></i> {item.name}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.profileInfosArea}>
        <h5>Your informations</h5>
        <div className={styles.infosAreaList}>
          <div className={styles.infosAreaRow}>
            <h3>Email address</h3>
            <h3>devfreitas12@gmail.com</h3>
          </div>
          <div className={styles.infosAreaRow}>
            <h3>Telephone</h3>
            <h3>+55 (75) 9 9235-2499</h3>
          </div>
          {item.name.toLocaleLowerCase() === 'financial' ||
          item.name.toLocaleLowerCase() === 'administration' ? (
            <div className={styles.infosAreaRow}>
              <h3>Sales made</h3>
              <h3>23</h3>
            </div>
          ) : null}
          {item.name.toLocaleLowerCase() === 'financial' ||
          item.name.toLocaleLowerCase() === 'administration' ? (
            <div className={styles.infosAreaRow}>
              <h3>Revenue generated</h3>
              <h3>$ 2.423</h3>
            </div>
          ) : null}
          {item.name.toLocaleLowerCase() === 'financial' ||
          item.name.toLocaleLowerCase() === 'administration' ? (
            <div className={styles.infosAreaRow}>
              <h3>Registered customers</h3>
              <h3>498</h3>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => router.back()} className={styles.btnCancel}>
          Cancel
        </button>
        <button onClick={() => router.push('/control/dashboard')}>
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  )
}
