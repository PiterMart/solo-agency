'use client'
import styles from '../page.module.css'
import React, { useEffect, useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

export default function  NoSomos({value, progress, range}) {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 1', 'start 0.25']
    })
    


    return (
        <motion.div className={styles.center2}
        >
            <p>
            NO SOMOS <strong>SOLO</strong> UNA AGENCIA
            </p>
            <p>
            somos todo eso que queres contar.
            </p>
        </motion.div>
    );
  }