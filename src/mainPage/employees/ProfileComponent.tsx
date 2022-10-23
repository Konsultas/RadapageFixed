import Image from "next/image"
import { FC } from "react"
import style from "../../../styles/mainPageStyles/ProfileComponent.module.scss"
interface Props{
    imgPath:string
    name: string,
    tittle: string
    description: string[]
}

export const ProfileComponent:FC<Props> = (props:Props)=>{
    return( 
        <section className={style.profil}>
            <div className={style.profilBilde}>
                <Image layout="fill" objectFit="contain"  src={props.imgPath} alt=""/>
            </div>
           
            <span className={style.profilBeskrivelse}>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.tittle}</p>
                    
                </div>
                {props.description.map((el, index) => <p key={`profile${index}`}>{el}</p>)}
            </span>
        </section>)
}
export default ProfileComponent