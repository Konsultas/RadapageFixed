import React, { FC } from "react";

import style from "../../../styles/mainPageStyles/ProfileComponent.module.scss"
import ProfileComponent from "./ProfileComponent";
import { profilesMeta } from "./profilesMeta";
export const Profiles: FC = () => {
    return (<div className={style.ansatteWrapper}>
        <h2 className={style.ansattIntroduksjon}>Våre folk</h2>
        {profilesMeta.map((el, index) => {
            return <ProfileComponent
                key={index + "profile"}
                description={el.description}
                imgPath={el.imgPath}
                tittle={el.tittle}
                name={el.name}
            />
        })}

    </div>)
}
export default Profiles