'use client'
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Flecha2({isActive, setIsActive}) {

    return (
        <motion.div 
            onClick={() => {setIsActive(!isActive)}}
            className={styles.arrow2}
            animate={{
                rotate: isActive ? 0 : -180
            }}
            transition={{duration: 1, ease: [0.33, 1, 0.68, 1]}}
        >
            <Image
            
                src="/FLECHA.svg"
                alt="menu"
                width={160}
                height={60}
                priority
            />
        </motion.div>  

    )
}