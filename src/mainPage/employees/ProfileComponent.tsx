import Image from "next/future/image"
import { FC } from "react"
import style from "@/styles/mainPageStyles/ProfileComponent.module.scss"
import { GetStaticProps, GetStaticPropsResult } from 'next';
interface Props{
    imgPath:string
    name: string,
    title: string,
    description: string[],
}

const ProfileComponent:FC<Props> = (props:Props)=>{
    return( 
        <section className={style.profil}>
            <Image className={style.profilBilde} src={props.imgPath} alt=""/>
         
           
            <span className={style.profilBeskrivelse}>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.title}</p>
                    
                </div>
                <p>{props.description}</p>
            </span>
        </section>)
}

export default ProfileComponent