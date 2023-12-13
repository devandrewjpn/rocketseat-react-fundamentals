import styles from './header.module.css'

import igniteLogo from '../images/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo ignite" />
        </header>
    )
}