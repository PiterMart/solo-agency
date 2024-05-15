'use client'
import styles from "../page.module.css";
import Link from "next/link";
import '../globals.css'
import Image from "next/image";

export default function ClientsRed() {

    return (
        <div >
            <div className={styles.redirect__container}>
                    <div className={styles.redirect}>
                        {/* <Image
                            src="/FLECHA.svg"
                            alt="Solo Agency"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{height: '70px', width: 'auto', transform: 'rotate(90deg)', margin: 'auto'}}
                        /> */}
                        <Link href={'/clients'} style={{width: '100%'}}>
                        <p style={{width: '100%'}}>ALL CLIENTS</p>
                        </Link>
                        <div style={{background: 'black', height: '150vh', position: 'fixed', zIndex: '-1', width: '100vw', top: '0', left: '0'}}></div>
                    </div>
            </div>
        </div>
    )
}