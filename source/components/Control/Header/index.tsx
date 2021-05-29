import styles from './styles.module.scss'
import { useRef } from 'react'
import Link from 'next/link'
import { useWorkspace } from '../../../contexts/workspace'

export default function Header() {
  const selectRef = useRef<HTMLDivElement>(null)
  const selectItemRef = useRef<HTMLDivElement>(null)
  const { items, setItems, item, setItem } = useWorkspace()

  function removeItemOnce(array: Array<any>, content: unknown) {
    const index = array.indexOf(content)
    if (index > -1) {
      array.splice(index, 1)
    }
    return array
  }
  if (item.id === items[0].id) {
    setItems(removeItemOnce(items, items[0]))
  }

  return (
    <div className={styles.simpleHeader}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.navBar}>
            <div className={styles.logo}>Stores</div>
            <ul>
              <li className={styles.activeNav}>
                <Link href="/control/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/control/products">Products</Link>
              </li>
              <li>
                <Link href="/control/posts">Posts</Link>
              </li>
              <li>
                <Link href="/control/sales">Sales</Link>
              </li>
            </ul>
          </div>
          <div className={styles.selectWrapper}>
            {/* <div className={styles.selectTitle}>Select workspace</div> */}
            <div className={styles.selectOptions}>
              <ul>
                <li className={styles.selectOptionActive}>
                  <div
                    onClick={() => {
                      selectRef.current.classList.toggle('select--select')
                      selectRef.current.classList.toggle('d-none')
                    }}
                    className={styles.selectOption}
                  >
                    <div>
                      <div className={styles.selectOptionIcon}>
                        <i className={item.iconClass}></i>
                      </div>
                      <h5>{item.name}</h5>
                    </div>
                    <div className={styles.iconDown}>
                      <i className="bx bx-chevron-down"></i>
                    </div>
                  </div>
                </li>

                <div ref={selectRef} className="d-none">
                  {items.map((i) => (
                    <li key={i.id}>
                      <div
                        onClick={() => {
                          const arr = items.concat([item])
                          const narr = removeItemOnce(arr, i)
                          setItems(narr)
                          selectRef.current.classList.toggle('select--select')
                          selectRef.current.classList.toggle('d-none')
                          setItem(i)
                        }}
                        ref={selectItemRef}
                        className={styles.selectOption}
                      >
                        <div>
                          <div className={styles.selectOptionIcon}>
                            <i className={i.iconClass}></i>
                          </div>
                          <h5>{i.name}</h5>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
