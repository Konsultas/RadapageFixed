import { FC } from "react";
import styles from "@/styles/common/SkipToContent.module.scss"
interface Props {
    skipTo:string
}
export const SkipToContent: FC<Props> = (props:Props)=>{
    return <a className={styles.skipToContent} tabIndex={1} href={props.skipTo}>HOPP TIL INNHOLD</a>
}
export default SkipToContent