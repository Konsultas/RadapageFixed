import { GetStaticProps, GetStaticPropsResult } from "next";
import React, { FC } from "react";

import style from "../../../styles/mainPageStyles/ProfileComponent.module.scss"
import ProfileComponent from "./ProfileComponent";
import { profilesMeta } from "./profilesMeta";

interface Props {
    profiles: any,
}

const Profiles: FC<Props> = (props) => {
    const { profiles } = props;

    return (
        <div className={style.ansatteWrapper}>
            <h2 className={style.ansattIntroduksjon}>Våre folk</h2>
            {profiles.map((el: { id: string; attributes: { description: string; picture: { url: string}; position: string; name: string; }; imgPath: string; title: string; name: string; }, index: any) => {
                console.log(el.attributes.picture)
                const imgPath = el.attributes.picture.url;
                return <ProfileComponent
                    key={el.id + "profile"}
                    description={el.attributes.description}
                    imgPath={imgPath}
                    title={el.attributes.position}
                    name={el.attributes.name}
                />
            })}

        </div>
        )
}

export default Profiles