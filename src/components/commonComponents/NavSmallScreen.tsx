import { FC, useEffect, useState } from "react";
import styles from "@/styles/header.module.scss"

export const NavSmallScreen : FC=()=>{
    const [active, setActive]=useState(false)
    const [oldScroll, setOldScroll] = useState(0)
    const menuClickHandler = ()=>{
        setActive(!active)
    }
    const closeMenu = () => {
        setActive(false)
    }
    useEffect(()=>{
        setOldScroll(window.scrollY) 
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > window.innerHeight*0.7 && window.scrollY > oldScroll) {
                closeMenu()
            } 
            setOldScroll(window.scrollY) 
        })
    })


    return (
        <div className={styles.navContainer}>
            <button onClick={menuClickHandler} aria-label="Hovedmeny" aria-expanded="false" id="navSmallScreen" className={`${styles.navbarSmallScreen} ${active?styles.navbarSmallScreenActive:""}`}>
                <span className={`${styles.hamburgerBar}`}></span>
                <span className={`${styles.hamburgerBar}`}></span>
                <span className={`${styles.hamburgerBar}`}></span>
            </button>
            <ul  className={`${styles.menu}  ${active?styles.menuActive:""}`}>
                <a role="button" onClick={closeMenu} className={styles.menuPoint}   href="#innledning">Om Oss</a>
                <a role="button" onClick={closeMenu} className={styles.menuPoint}  href="#jobbeHer">Jobbe Her?</a>
                <a role="button" onClick={closeMenu} className={styles.menuPoint}  href="#footer">Kontakt</a>
            </ul>  
        </div>  
    )
}