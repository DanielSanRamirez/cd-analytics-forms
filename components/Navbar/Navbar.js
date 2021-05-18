import React from 'react'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img className={styles.image} src="https://www.pichincha.com/portal/Portals/0/MainPichincha.svg?ver=2020-06-17-220007-653"></img>
            <div className={styles.separator}></div>
        </div>
    )
}

export default Navbar
