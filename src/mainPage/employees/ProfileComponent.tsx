import Image from "next/future/image"
import { FC } from "react"
import style from "@/styles/mainPageStyles/ProfileComponent.module.scss"
interface Props{
    imgPath:string
    name: string,
    title: string
    description: string[]
}

export const ProfileComponent:FC<Props> = (props:Props)=>{
    return( 
        <section className={style.profil}>
            <Image className={style.profilBilde} src={props.imgPath} alt=""/>
         
           
            <span className={style.profilBeskrivelse}>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.title}</p>
                    
                </div>
                {props.description.map((el, index) => <p key={`profile${index}`}>{el}</p>)}
            </span>
        </section>)
}
export default ProfileComponent