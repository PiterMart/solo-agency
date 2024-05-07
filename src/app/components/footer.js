import Link from "next/link";  
import styles from "../page.module.css";
import Image from "next/image"; 

export default function Carousel(){

  return(
    <div className={styles.footer}>
      <div className={styles.footer__section_container}>
          <div className={styles.footer__section}>
            <p className={styles.subtitle}>KNOW MORE</p>
            <p><Link href="/about">ABOUT US</Link></p>
            <p><Link href="/services">SERVICES</Link></p>
            <p><Link href="/clients">CLIENTS</Link></p>
            <p><Link href="/contact">CONTACT</Link></p>
          </div>
          <div className={styles.footer__section}>
            <p className={styles.subtitle}>FOLLOW US</p>
            <p><Link href="/artists">INSTAGRAM</Link></p>
            <p><Link href="/contact">WHATSAPP</Link></p>
            <p><Link href="/exhibitions">LINKEDIN</Link></p>
          </div>
        <div style={{textAlign: 'center'}}>
          <Image
            src="/SOLO AGENCY LOGO TYPO BLANCO.png"
            alt="Solo Agency"
            width={0}
            height={0}
            sizes="100vw"
            style={{width: '20rem', height: 'auto'}}
          />
          <p>NO SOMOS <strong>SOLO</strong> UNA AGENCIA</p>
        </div>
      </div>
    </div> 
  )
}