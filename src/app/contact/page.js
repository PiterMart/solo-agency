'use client'
import { useEffect } from "react";
import styles from '../page.module.css'
import ContactForm from "../components/contactForm";
import Inner from "../inner/inner";


export default function Contact() {

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
      <Inner>
          <div className={styles.page__info}>
            <div id="footer">
              <div className={styles.tuMarca}>
                <p>
                  TU MARCA SE CODIFICA CON EL MENSAJE DEL EXITO
                </p>
              </div>
            </div>
          </div>
          <div className={styles.contact__page}>
            <div className={styles.contact__page__details}>
              <div className={styles.contact__page__details__section}>
                <p className={styles.subtitle}>WHATSAPP</p>
                <p>+52-33-12345678</p>
              </div>
              <div className={styles.contact__page__details__section}>
                <p className={styles.subtitle}>INSTAGRAM</p>
                <p>@solo_agency</p>
              </div>
              <div className={styles.contact__page__details__section}>
                <p className={styles.subtitle}>BEHANCE</p>
                <p>+52-33-12345678</p>
              </div>
              <div className={styles.contact__page__details__section}>
                <p className={styles.subtitle}>LINKEDIN</p>
                <p>+52-33-12345678</p>
              </div>
            </div>
            <ContactForm/>
          </div>
      </Inner>
    </main>
  );
}
