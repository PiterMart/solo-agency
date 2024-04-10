'use client'
import styles from "../page.module.css";
import Link from "next/link";
import '../globals.css'


export default function ClientsRed() {

    return (
        <div className={styles.center} style={{background: 'rgb(0,0,0)',
            background: 'linear-gradient(180deg, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 94%)'}}>
            <div>
                <p className={styles.title}><Link href={'/clients'}>Back to Clients</Link></p>
            </div>
        </div>
    )
}