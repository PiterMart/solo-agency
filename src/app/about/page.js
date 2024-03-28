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
      <div className={styles.WWW}>
          <p className={styles.subtitle}>ABOUT US</p>

      </div>
    </main>


  );
}
