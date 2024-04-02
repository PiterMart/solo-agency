'use client'
import Image from "next/image";
import { useEffect } from "react";
import styles from '../page.module.css'
import Flecha2 from "../components/flecha2";
import { useState } from "react";
import { motion } from "framer-motion";



export default function About() {
  

  const  [isActive, setIsActive] = useState(true);

  useEffect( () => {
    
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className={styles.main} style={{background: "black"}}>
      <div className={styles.page}>

      <div className={styles.page__title}>
          <p className={styles.title}>SERVICES</p>
          <p>Solo Agency es una agencia creativa espacializada en el diseño de identidad visual y comunicacion efectiva.</p>
      </div>
      <div className={styles.services_container}>
        <div className={styles.service}>
          <div className={styles.service__banner}
          onClick={() => {setIsActive(!isActive)}}>
            <p className={styles.section_title}>Comunity Management</p>
            <Flecha2 
            style={{display: 'block'}}
            isActive={isActive} setIsActive={setIsActive}
            />
          </div>
          <motion.div className={styles.service__list}
          animate={{height: isActive ? "0": "auto", color: isActive ? "transparent": "white"}}
          transition={{duration: 1, ease: [0.33, 1, 0.68, 1]}}>
            <p className={styles.subtitle}>Calendarización</p>
            <p className={styles.subtitle}>Copywriting</p>
            <p className={styles.subtitle}>Posting</p>

          </motion.div>

        </div>
      </div>

      </div>

    </main>

  );
}