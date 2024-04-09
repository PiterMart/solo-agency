import Link from "next/link";  
import Image from "next/image";  
import styles from "../page.module.css";
        
       

export default function Carousel(){



  return(
    <div className={styles.footer}>
          <div className={styles.contentSection} style={{borderTop: '0px solid #ffffff', marginTop: '1rem'}}>

          </div>
          <div className={styles.smLinks}>
              <p><Link href="/artists">Instagram</Link></p>
              <p><Link href="/exhibitions">LinkedIn</Link></p>
              <p><Link href="/contact">Twitter</Link></p>
              <p><Link href="/contact">Facebook</Link></p>
          </div>
          {/* <div>
          <div className={styles.mail}>
              <p>mail</p>
              <a href="mailto:someone@example.com">Soloagency6@gmail.com</a>
            </div>

            <div className={styles.mail}>
                <p>phones</p>
                <a>+52-33-12345678</a>
            </div>
          </div> */}
        </div> 





  )
}