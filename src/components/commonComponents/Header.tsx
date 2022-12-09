import Image from "next/image"
import styles from "@/styles/header.module.scss"
import { NavSmallScreen } from "./NavSmallScreen"
import { NavNormalSize } from "./NavnNormalSize"
import { useEffect, useState } from "react"
export const Header = ()=>{
    const [width, setWidth]= useState(0)
    useEffect(()=>{
        setWidth(window.innerWidth)
        window.addEventListener("resize", ()=>{
            setWidth(window.innerWidth)
        })
    }, [])
   
    return(
      <header>
          <div id="topp" className={styles.navfelt}>
                <a href="index.html"><Image className={styles.companyLogo} src={require("../../../public/resources/radaLogo.png")} alt="Rada consulting-logo" /></a>
                <nav >
                    {width < 900 ? <NavSmallScreen/> : <NavNormalSize/>}
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