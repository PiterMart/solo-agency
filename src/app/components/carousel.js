'use client'
import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

export default function Carousel(){

    return(
        <div className={styles.client__carousel}>
            <p className={styles.title}><Link href={'/clients'}>CLIENTS</Link></p>
            <div className={styles.scroller} >
                <div className={styles.scroller__inner}>
                    <Link href={'../clients/elGorumet'}>
                        <Image
                            src="/logos/elgourmetLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/dollstore'}>
                        <Image
                            src="/logos/dollstoreLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/eucerin'}>
                        <Image
                            src="/logos/eucerinLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/justaOsadia'}>
                        <Image
                            src="/logos/justaosadiaLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/lidherma'}>
                        <Image
                            src="/logos/lidhermaLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/pucheta'}>
                        <Image
                            src="/logos/puchetaLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/elGorumet'}>
                        <Image
                            src="/logos/elgourmetLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/dollstore'}>
                        <Image
                            src="/logos/dollstoreLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/eucerin'}>
                        <Image
                            src="/logos/eucerinLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/justaOsadia'}>
                        <Image
                            src="/logos/justaosadiaLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/lidherma'}>
                        <Image
                            src="/logos/lidhermaLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={'../clients/pucheta'}>
                        <Image
                            src="/logos/puchetaLogo.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Picture of the author"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )

}