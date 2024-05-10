'use client'
import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

export default function ServicesCarousel(){

    return(
        <div className={styles.carousel}>
            <p className={styles.title}>SERVICES</p>
            <p className={styles.page__description}>Solo Agency es una agencia creativa espacializada en el diseño de identidad visual y comunicacion efectiva.</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p className={styles.button2} style={{margin: '2rem',marginLeft: '0px', textAlign: 'left', right: '0'}}><Link href="/services">ALL SERVICES</Link></p>
            </div>
        </div>
    )

}