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
                <a href="https://wa.me/+541131313954" target="blank"><p>+52-33-12345678</p></a>
              </div>
              <div className={styles.contact__page__details__section}>
                <p className={styles.subtitle}>INSTAGRAM</p>
                <a href="https://www.instagram.com/solo_agency/" target="blank"><p>@solo_agency</p></a>
              </div>
              <div className={styles.contact__page__details__section}>
                <p className={styles.subtitle}>BEHANCE</p>
                <a href="" target="blank"><p>-------</p></a>
              </div>
              <div className={styles.contact__page__details__section}>
                <p className={styles.subtitle}>LINKEDIN</p>
                <a href="" target="blank"><p>-------</p></a>
              </div>
            </div>
            <ContactForm/>
          </div>
      </Inner>
    </main>
  );
}
