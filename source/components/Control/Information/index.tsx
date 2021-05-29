import { useRouter } from 'next/router'
import { useWorkspace } from '../../../contexts/workspace'
import styles from './styles.module.scss'

export default function Information() {
  const { item } = useWorkspace()
  const router = useRouter()

  return (
    <div className={styles.information}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2>
            Informations{' '}
            <span>
              (<i className={item.name}></i>
              {item.name})
            </span>
          </h2>
          <button onClick={() => router.back()}>
            <i className="bx bx-left-arrow-alt"></i>
          </button>
        </div>

        {item.name.toLocaleLowerCase() === 'financial' ? (
          <div className={styles.card}>
            <div>
              <small>$</small>
              <h5>22.345</h5>
              <p>money generated this year</p>
            </div>
            <div>
              <i className="bx bx-bar-chart"></i>
            </div>
          </div>
        ) : null}

        {item.name.toLocaleLowerCase() === 'financial' ? (
          <div className={styles.card}>
            <div>
              <small>#</small>
              <h5>289</h5>
              <p>orders placed</p>
            </div>
            <div>
              <i className="bx bx-pie-chart-alt-2"></i>
            </div>
          </div>
        ) : null}

        {item.name.toLocaleLowerCase() === 'financial' ? (
          <div className={styles.card}>
            <div>
              <small>#</small>
              <h5>234</h5>
              <p>registered customers</p>
            </div>
            <div>
              <i className="bx bx-chart"></i>
            </div>
          </div>
        ) : null}

        {item.name.toLocaleLowerCase() === 'development' ? (
          <div className={styles.card}>
            <div>
              <small>#</small>
              <h5>0</h5>
              <p>registered problems</p>
            </div>
            <div>
              <i className="bx bx-error"></i>
            </div>
          </div>
        ) : null}

        {item.name.toLocaleLowerCase() === 'development' ? (
          <div className={styles.card}>
            <div>
              <small>#</small>
              <h5>23</h5>
              <p>license expires in (days)</p>
            </div>
            <div>
              <i className="bx bx-time"></i>
            </div>
          </div>
        ) : null}

        {item.name.toLocaleLowerCase() === 'administration' ? (
          <div className={styles.card}>
            <div>
              <small>#</small>
              <h5>2</h5>
              <p>messages waiting for response</p>
            </div>
            <div>
              <i className="bx bx-chat"></i>
            </div>
          </div>
        ) : null}

        {item.name.toLocaleLowerCase() === 'administration' ? (
          <div className={styles.card}>
            <div>
              <small>#</small>
              <h5>24</h5>
              <p>registered products</p>
            </div>
            <div>
              <i className="bx bx-box"></i>
            </div>
          </div>
        ) : null}

        {item.name.toLocaleLowerCase() === 'administration' ? (
          <div className={styles.card}>
            <div>
              <small>#</small>
              <h5>0</h5>
              <p>delivery products</p>
            </div>
            <div>
              <i className="bx bx-car"></i>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
