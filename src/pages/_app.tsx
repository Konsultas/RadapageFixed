import '../../styles/globals.scss'
import "../../styles/header.css"
import "../../styles/footer.css"
import "../../styles/main.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
