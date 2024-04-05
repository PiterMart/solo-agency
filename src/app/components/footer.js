import Link from "next/link";  
import Image from "next/image";  
import styles from "../page.module.css";
import TuMarca from "./tumarca";
        
       

export default function Carousel(){



  return(
    <div className={styles.footer}>
          <TuMarca/>
          <div className={styles.contentSection} style={{borderTop: '0px solid #ffffff', marginTop: '1rem'}}>

          </div>
          <div className={styles.smLinks}>
              <p><Link href="/artists">Instagram</Link></p>
              <p><Link href="/exhibitions">LinkedIn</Link></p>
              <p><Link href="/contact">Twitter</Link></p>
              <p><Link href="/contact">Facebook</Link></p>
          </div>
          <div>
          <div className={styles.mail}>
              <p>mail</p>
              <a href="mailto:someone@example.com">Soloagency6@gmail.com</a>
            </div>

            <div className={styles.mail}>
                <p>phones</p>
                <a>+52-33-12345678</a>
            </div>
          </div>
          <div className={styles.endpage}>
            <Link href="/">
            <Image
                    src="/SOLO AGENCY LOGO TYPO BLANCO.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '70rem', paddingTop: '5rem' }}
                    alt="Picture of the author"
            />
            </Link>
          </div>
        </div> 





  )
}