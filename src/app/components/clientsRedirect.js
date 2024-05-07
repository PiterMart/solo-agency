'use client'
import styles from "../page.module.css";
import Link from "next/link";
import '../globals.css'
import Image from "next/image";


export default function ClientsRed() {

    return (
        <div className={styles.redirect__background}>
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
                        <p style={{fontSize: '50px', fontWeight: '400', fontFamily: 'Aron'}}>BACK <br></br>TO <br></br>CLIENTS</p>
                        <div></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}