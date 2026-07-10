import styles from  './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div>Header</div>
        <div>Section 1</div>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header