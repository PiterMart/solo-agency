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
        <div className={styles.contact}>
          <div className={styles.page__title}>
            <div className={styles.tuMarca} id="footer">
              <div>
                <p>
                  Tu marca se codifica con el mensaje del éxito.  
                </p>
              </div>
            </div>
          </div>
          <ContactForm/>
        </div>
      </Inner>
    </main>

  );
}