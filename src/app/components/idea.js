import Link from "next/link";  
import styles from "../page.module.css";

export default function Idea(){

  return(
    <div>
      <div className={styles.idea}>
        <div>
          <p>Tenes una</p>
          <p>idea?</p>
        </div>
        <div>
        <p className={styles.button2}><Link href="/contact">CONTACTANOS</Link></p>
        </div>
      </div>
    </div> 
  )
}