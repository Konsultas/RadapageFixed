import type { NextPage } from 'next';
import { Layout } from 'src/components/Layout';
import { Profiles } from '../mainPage/employees/Profiles';
import styles from '@/styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
        <div className="body">
        <a tabIndex={0} className="tilTopp" href="#topp">Til topp</a>
        <a id="skipToContent" tabIndex={1} href="#innledning">HOPP TIL INNHOLD</a>
        <main className={styles.main}>
            <section id="innledning" className={styles.intro}>
                <h2>Hvem er Rada?</h2>
                <p>Hos oss er vi alle utviklere, og vi setter utviklerne i sentrum <br/>
                    Hva er ditt drømmeprosjekt?<br/>
                    Hva skal til for at du får ut ditt potensiale?<br/>
                    Vi har spennende prosjekter på oppdrag for kunder og egne innovasjonsprosjekter <br/>
                    Vi former arbeidshverdagen etter hva som funker best for hver enkelt av oss <br/>
                    Vi har det morsomt på jobb fordi karriereutvikling skjer best med lave skuldre</p>
            </section>
            <span className={styles.redLine}></span>
            <Profiles />
            <span className={styles.redLine}></span>
            <section className={styles.joinTheTeam}>
                <h2>Join the team!</h2>
                <p>
                    Vil du jobbe sammen med oss? <br/>
                    Vi tilbyr kule oppdrag, faglige utfordringer, dyktige kollegaer, og sjansen til å bidra på de mest spennende prosjektene i Norge. <br/>
                    Vårt nettverk av oppdragsgivere og merittliste i bransjen gjør at du kan velge oppdrag med frihet.
                </p>
                <p>
                    Kontakt oss gjerne for en uformell prat på <a aria-label="email" href="thomas@rada.no">thomas@rada.no</a>      
                </p>
            </section>
            <section id="jobbeHer" className={styles.workHere}>
                    <span>
                        <h2>Ledestjerner / Senior Utviklere</h2>
                        <p>
                            Vil du jobbe teknisk med faget ditt og samtidig være mentor for yngre utviklere? <br/>
                            Er du superdyktig med maskiner og verktøy, men like god med mennesker? <br/>
                            Vi søker utviklere innen iOS, web/frontend og backend.
                        </p>
                        <p>
                            Som Ledestjerne innen din avdeling vil du: <br/>
                            – jobbe med én eller flere spennende prosjekter samtidig <br/>
                            – bidra med tyngde som senior på prosjekter med andre konsulenter <br/>
                            – ha det overordnede ansvaret for teknisk kvalitet <br/>
                            – bidra til faglige og sosiale arrangementer  <br/>
                        </p>
                    </span>

                    <div>
                    <span>
                        <h2>Utviklere</h2>
                        <p>
                            Har du erfaring som utvikler og ønsker å jobbe i et dynamisk og spennende miljø? 
                            Hos oss vil du få mulighet til å bidra på masse spennende prosjekter og ha dyktige, erfarne kollegaer å jobbe sammen med.
                        </p>
                    </span>
                    <span>
                        <h2>Nyutdannede</h2>
                        <p>
                            Er lærevillig, lidenskapelig opptatt av teknologi og ønsker å jobbe med kule prosjekter? Hos oss vil du få en designert senior / Ledestjerne som guider deg inn i den fantastiske verden som utvikler
                        </p>
                    </span>
                </div>
            </section>
            <span className={styles.redLine}></span>
            
        </main>
    </div>
  </Layout>
  )
}

export default Home
