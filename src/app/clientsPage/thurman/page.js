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
      <motion.div className={styles.center} data-scroll data-scroll-speed="0.7"initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
        transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
        }}>
          <div className={styles.service__banner}>
            <Image
            className={styles.logo}
            src="/logos/thurmanLogo.png"
            alt="Solo Agency"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
            />
          </div>
      </motion.div>
      <div>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none' }}>
          <source src="/thurman/videoCampañaThurman.mp4" />
        </video>
      </div>
      
      <div className={styles.client__content}>
        <div>
          <video autoPlay muted loop playsInline style={{maxWidth: '500px', position: 'relative', zIndex: '1', right: '0', bottom: '0', pointerEvents: 'none' }}>
              <source src="/thurman/thurman1.mp4" />
          </video>
          <p className={styles.client__text}>Videography</p>
        </div>
        <div data-scroll data-scroll-speed="0.7">
        <video autoPlay muted loop playsInline style={{maxWidth: '500px', position: 'relative', zIndex: '1', right: '0', bottom: '0', pointerEvents: 'none' }}>
              <source src="/thurman/thurman2.mp4" />
          </video>
          <p className={styles.client__text}>Videography</p>
        </div>
        <div data-scroll data-scroll-speed="0.9">
        <video autoPlay muted loop playsInline style={{maxWidth: '500px', position: 'relative', zIndex: '1', right: '0', bottom: '0', pointerEvents: 'none' }}>
              <source src="/thurman/thurman3.mp4" />
          </video>
          <p className={styles.client__text}>Videography</p>
        </div>
      </div>
    </main>
  );
}