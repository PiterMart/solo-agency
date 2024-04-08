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
            src="/logos/aiaLogo.png"
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
          <source src="/aia/reel4AIA.mp4" />
        </video>
      </div>
      
      <div className={styles.client__content}>
        <div>
          <video autoPlay muted loop playsInline style={{maxHeight: '800px', maxWidth: '100vw', position: 'relative', zIndex: '1', right: '0', bottom: '0', pointerEvents: 'none' }}>
              <source src="/aia/lycraVisionAIA.mp4" />
          </video>
          <p className={styles.client__text}>Videography</p>
        </div>
        <div data-scroll data-scroll-speed="0.7">
          <Image
              className={styles.logo}
              src="/aia/aia1.JPG"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
          />
          <p className={styles.client__text}>Photography</p>
        </div>
        <div data-scroll data-scroll-speed="0.9">
          <Image
              className={styles.logo}
              src="/aia/aia2.JPG"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
          />
          <p className={styles.client__text}>Photography</p>
        </div>
      </div>
    </main>
  );
}
