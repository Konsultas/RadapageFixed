import { NextComponentType } from "next";
import Image from "next/image";
import styles from '@/styles/Footer.module.scss';
import { PartnerMeta } from "src/common/types";
import { FC } from "react";
interface Props{
    listOfPartners: PartnerMeta[]
}
export const Partners:FC<Props> = ({listOfPartners}) => {
    return (
        <section className={styles.partners}>
           <h2>Noen av våre nåværende og tidligere kunder</h2>
           <div>
                {listOfPartners.map((e, index)=> <Image key={index} src={e.imagPath} alt={e.alt}/>)}
            </div>
        </section>
      
    )
}