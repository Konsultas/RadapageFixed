import Head from "next/head";
import { FC } from "react";
import { Header } from "src/mainPage/header/Header";
import styles from '@/styles/Layout.module.scss';
import { Footer } from "./Footer";
interface Props {
    title?:string,
    description?:string,
    keywords?:string,
    children:React.ReactNode
}

export const Layout:FC<Props> = (props:Props) => {
    const { title, description, keywords, children } = props;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="descirption" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )

}

Layout.defaultProps = {
    title: 'Rada Consulting',
    description: 'Consulting developers in Oslo and Norway',
    keywords: 'developer, IT, consulting, tech'
}