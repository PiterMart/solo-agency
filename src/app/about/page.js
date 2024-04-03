'use client'
import Image from "next/image";
import { useEffect } from "react";
import styles from '../page.module.css'



export default function About() {

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
      <div className={styles.page}>

        <div className={styles.page__title}>
          <p className={styles.title}>ABOUT US</p>
          <p><strong>SOLO</strong> UN MANIFESTO</p>
        </div>

        <div className={styles.about__paragraph__container}>
          <p className={styles.about__paragraph}>
          Es ese “que no somos”. ¿Qué hay en ese espacio en blanco? ¿Qué podemos construir? Es utópico porque todo lo que se encuentra existiendo en el mundo de las ideas se construye junto a nosotros en la materialización de un todo posible. No somos solo una agencia, ¿qué somos? Somos el camino hacia un futuro de conexiones conscientes, de comunicaciones visuales y narrativas coherentes. Somos un espacio vacío repleto de posibilidades intangibles y nos encontramos en el rol de manifestar en este lado del plano aquello que existe en el imaginario.<strong> Tu marca se codifica con el mensaje del éxito.</strong> Somos todo aquello que queres comunicar.
          </p>

        </div>

      </div>

    </main>


  );
}
