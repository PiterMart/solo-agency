import Link from "next/link";  
import styles from "../page.module.css";

export default function Idea(){

  return(
      <div className={styles.idea}>
        <div>
          <p>Tenes una idea?</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p className={styles.button2} style={{marginLeft: '0rem'}}><Link href="/contact">CONTACTANOS</Link></p>
        </div>
      </div>
  )
}