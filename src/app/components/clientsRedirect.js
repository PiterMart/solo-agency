'use client'
import styles from "../page.module.css";
import Link from "next/link";
import '../globals.css'


export default function ClientsRed() {

    return (
        <div className={styles.center} style={{background: 'rgb(0,0,0)',}}>
            <div>
                <p style={{fontSize: '50px', fontWeight: '400', fontFamily: 'Aron'}}><Link href={'/clients'}>See all clients</Link></p>
            </div>
        </div>
    )
}