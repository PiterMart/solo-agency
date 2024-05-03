'use client'
import styles from "../page.module.css";
import Link from "next/link";
import '../globals.css'
import Image from "next/image";


export default function ClientsRed() {

    return (
        <div className={styles.center} style={{background: 'rgb(0,0,0)', marginBottom: '-10rem', zIndex:'-2', gap: '5rem'}}>
            <div className={styles.redirect__container}>
                <Link href={'/clients'}>
                    <div className={styles.redirect}>
                        <Image
                            src="/flecha.svg"
                            alt="Solo Agency"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{height: '70px', width: 'auto', transform: 'rotate(90deg)', margin: 'auto'}}
                        />
                        <p style={{fontSize: '50px', fontWeight: '400', fontFamily: 'Aron', margin: 'auto'}}>BACK <br></br>TO <br></br>CLIENTS</p>
                    </div>
                </Link>
                <Link href={'/contact'}>
                    <div className={styles.redirect}>
                        <p style={{fontSize: '50px', fontWeight: '400', fontFamily: 'Aron', margin: 'auto'}}>CONTACT<br></br> US</p>
                        <Image
                            src="/flecha.svg"
                            alt="Solo Agency"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{height: '70px', width: 'auto', transform: 'rotate(-90deg)',margin: 'auto'}}
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}