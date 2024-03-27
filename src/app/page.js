'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Paragraph from './components/paragraph'
import Carousel from "./components/carousel";
import WWW from "./components/www";
import TuMarca from "./components/tumarca";
import { useEffect } from "react";

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

      <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', filter: 'brightness(50%)' }}>
        <source src="/3dBackground.mp4" />
      </video>


      <div className={styles.center} data-scroll data-scroll-speed="0.7">

        <Image
          className={styles.logo}
          src="/SOLO AGENCY LOGO TYPO BLANCO.png"
          alt="Solo Agency"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}
        />
        <p id="subtitle">NO SOMOS <strong>SOLO</strong> UNA AGENCIA</p>
      </div>
      <WWW />

      <Paragraph value={paragraph} />

      <div className={styles.center2}>
        <p>
          NO SOMOS <strong>SOLO</strong> UNA AGENCIA
        </p>
        <p>
        somos todo eso que queres contar.
        </p>
      </div>
      
      <Carousel/>

      <TuMarca/>

    </main>
  );
}
