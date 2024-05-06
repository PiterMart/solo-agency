import Link from "next/link";  
import styles from "../page.module.css";     

export default function Carousel(){

  return(
    <div className={styles.footer}>
      <div style={{borderTop: '0px solid #ffffff', marginTop: '1rem'}}>
        <p className={styles.subtitle}>Tenes una idea?</p>
        <p className={styles.title}>TRABAJEMOS JUNTOS</p>
      </div>
      <div className={styles.list}>
        <p><Link href="/artists">Instagram</Link></p>
        <p><Link href="/contact">Whatsapp</Link></p>
        <p><Link href="/exhibitions">LinkedIn</Link></p>
      </div>
    </div> 
  )
}