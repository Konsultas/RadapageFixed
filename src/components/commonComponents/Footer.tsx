import { NextComponentType } from "next";
import Image from "next/image";
import styles from '@/styles/Footer.module.scss';

export const Footer:NextComponentType = () => {
    return (
        <footer className={styles.footer}>
        <section className={styles.partners}>
           <h2>Noen av våre nåværende og tidligere kunder</h2>
           <div>
                <Image src={require("../../public/resources/SPAREBANK_LOGO.png")} alt="Sparebanken logo"/>
                <Image src={require("../../public/resources/nrk_logo.png")} alt="NRK logo"/>
                <Image src={require("../../public/resources/UIO_LOGO.png")} alt="UIO logo"/>
                <Image src={require("../../public/resources/HUAWEI_LOGO.png")} alt="Huawei logo"/>
            </div>
        </section>
        <section className={styles.contact}>
            <div>
                <h2>Du når oss med</h2>
                <span><a aria-label="email" href="thomas@rada.no">thomas@rada.no</a> </span>
                <span>+47 95 20 24 46</span>
            </div>
            <div>
                <h2>Du finner oss i</h2>
                <span>Rosenkrantz’ gate 4</span>
                <span>0159 Oslo</span>
            </div>
            <div>
                <h2>Bedriftinformasjon</h2>
                <span>Rada Tech AS</span>
                <span>Org.nr: 923552200</span>
            </div>
        </section>
    </footer>
    )
}