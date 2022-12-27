import Image from "next/image"
import styles from "@/styles/header.module.scss"
export const Header = ()=>{
    return(
      <header>
          <div id="topp" className={styles.navfelt}>
              <a href="index.html"><Image className={styles.companyLogo} width={130} height={40} src={require("../../public/resources/radaLogo.png")} alt="Rada consulting-logo" /></a>
              <nav >
                  <ul className={styles.navBar}>
                      <li><a role="button" href="#innledning">Om Oss</a></li>
                      <li><a role="button" href="#jobbeHer">Jobbe Her?</a></li>
                      <li><a role="button" href="#footer">Kontakt</a></li>
                  </ul>
                  <div className={styles.navContainer}>
                      <button aria-label="Hovedmeny" aria-expanded="false" id="navSmallScreen" className={`${styles.navbarSmallScreen} ${styles.hamburgerBtn}`}>
                          <span className={`${styles.hamburgerBar} ${styles.hamburgerBtn}`}></span>
                          <span className={`${styles.hamburgerBar} ${styles.hamburgerBtn}`}></span>
                          <span className={`${styles.hamburgerBar} ${styles.hamburgerBtn}`}></span>
                      </button>
                      <ul  className={styles.menu}>
                          <a role="button" className={styles.menuPoint}  href="#innledning">Om Oss</a>
                          <a role="button" className={styles.menuPoint}  href="#jobbeHer">Jobbe Her?</a>
                          <a role="button" className={styles.menuPoint}  href="#footer">Kontakt</a>
                      </ul>  
                  </div>
                
                  
              </nav>
            
          </div>
          <div className={styles.mottoWrapper}>
              <h1 className={styles.motto}>
                  Vi bygger norges råeste techmiljø
              </h1>
          </div>
      </header>
    )
}