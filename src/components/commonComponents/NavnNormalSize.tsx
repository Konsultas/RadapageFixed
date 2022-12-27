import { FC } from "react"
import styles from "@/styles/header.module.scss"

export const NavNormalSize: FC =()=>{
    return(
       
        <ul className={styles.navBar}>
            <li><a role="button" href="#innledning">Om Oss</a></li>
            <li><a role="button" href="#jobbeHer">Jobbe Her?</a></li>
            <li><a role="button" href="#footer">Kontakt</a></li>
        </ul>   
        
    )
}