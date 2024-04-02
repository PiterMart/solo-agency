'use client'
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Flecha from "./flecha";
import { useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";


export default function Nav() {

    const  [isActive, setIsActive] = useState(false);

    // const navLinkEls = document.querySelectorAll('.nav__link');

    // navLinkEls.forEach(navLinkEl => {
    //     navLinkEl.addEventListener('click', () => {
    //         navLinkEl.classList.add('active');
    //     })
    // })

    const pathname = usePathname();

    const isCurrent = pathname.startsWith(Link.href);

    return (
        
        <div className={styles.nav}>
            <div>
            <Link href="/">
            <Image
                src="/SOLO AGENCY LOGO TYPO BLANCO.png"
                alt="Valeries"
                width={177}
                height={45}
                priority
            />

            </Link>
            </div>
            <div 
                className={styles.list}
            >
                <motion.ul
                animate={{top: isActive ? "-15px": "-175px"}}
                transition={{duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
                >
                    <li className={styles.nav__link}><Link href="/about">ABOUT</Link></li>
                    <li className={styles.nav__link}><Link href="/services">SERVICES</Link></li>
                    <li className={styles.nav__link}><Link href="/contact">CLIENTS</Link></li>
                    <li className={styles.nav__link}><a href="#footer">CONTACT</a></li>
                    <Flecha 
                    isActive={isActive} setIsActive={setIsActive}
                    />
                </motion.ul>
            </div>
        </div>

    )
}