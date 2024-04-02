'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Paragraph from './components/paragraph'
import Carousel from "./components/carousel";
import WWW from "./components/www";
import Footer from "./components/footer"
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


    </main>
  );
}
