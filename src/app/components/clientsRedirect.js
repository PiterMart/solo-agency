'use client'
import styles from "../page.module.css";
import Link from "next/link";
import '../globals.css'


export default function ClientsRed() {

    return (
        <div className={styles.center} style={{background: 'rgba(0, 0, 0, 0.467)'}}>
            <div>
                <p className={styles.title}><Link href={'/clients'}>Back to Clients</Link></p>
            </div>
        </div>
    )
}