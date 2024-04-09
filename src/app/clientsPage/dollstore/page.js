'use client'
import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../page.module.css"
import Image from "next/image";


const  paragraph = "Somos un booster de marcas, creadores y de tus ideas. Creemos firmemente que hoy en día detrás de cada medio lo que más importa es el carácter humano otorgándole a tu marca su propia identidad siendo única e irrepetible. "

export default function Home() {

  useEffect( () => {
    
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  

  return (
    <main className={styles.main}>
      <div className={styles.client__page}>
      <motion.div
                  data-scroll data-scroll-speed="0.8"
        className={styles.client__banner} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
        transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
        
        }}>
          <div className={styles.service__banner}>
            <Image
            className={styles.logo}
            src="/logos/dollstoreLogo.png"
            alt="Solo Agency"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
            />
          </div>
          <div className={styles.client__info}>
        <div>
          <p className={styles.subtitle}>Servicios</p>
        </div>
        <div>
            <p>Análisis y estrategia</p>
            <p>Community management</p>
            <p>Calendarización</p>
            <p>Diseño</p>
          </div>

      </div>
      </motion.div>
      <div className={styles.client__content}>
        <div data-scroll data-scroll-speed="0.7">
          <p className={styles.client__title}>Sale 2024</p>
          <div className={styles.client__images}>
            <Image
                className={styles.client__image}
                src="/dollstore/sale241.jpg"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
            />
            <Image
                className={styles.client__image}
                src="/dollstore/sale242.png"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
            />
            <Image
                className={styles.client__image}
                src="/dollstore/sale243.jpg"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className={styles.client__content}>
        <div data-scroll data-scroll-speed="0.7">
          <p className={styles.client__title}>Sale 2023</p>
          <Image
                className={styles.client__image}
                src="/dollstore/sale23text.png"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
                data-scroll data-scroll-speed="0.1"
            />
          <div className={styles.client__images}>
            <video autoPlay muted loop playsInline className={styles.client__image}>
                <source src="/dollstore/sale23.mp4" />
            </video>
            <Image
                className={styles.client__image}
                src="/dollstore/sale23.png"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
            />
          </div>
        </div>
      </div>

      </div>
    </main>
  );
}
