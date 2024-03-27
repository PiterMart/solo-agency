'use client'
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Flecha from "./flecha";
import { useState } from "react";


export default function Nav() {

    const  [isActive, setIsActive] = useState(false);

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
                    <li><Link href="/artists">ABOUT</Link></li>
                    <li><Link href="/exhibitions">SERVICES</Link></li>
                    <li><Link href="/contact">CLIENTS</Link></li>
                    <li><Link href="/contact">CONTACT</Link></li>
                    <Flecha 
                    isActive={isActive} setIsActive={setIsActive}
                    />
                </motion.ul>
            </div>
        </div>

    )
}