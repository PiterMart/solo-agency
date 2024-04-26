'use client'
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
import styles from "../../page.module.css"
import Image from "next/image";
import React, { useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Script from "next/script";

export default function Home() {

  useEffect( () => {
    
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef2,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '5000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef3,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef4,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef5,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef6,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])

  return (
    <main className={styles.main}>
      <Script type="text/javascript" src="/scripts/lightbox.js"/>
      <div className={styles.client__page}>
        <motion.div
          className={styles.client__banner} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
          transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 }
          
          }}>
            <div className={styles.client__banner}>
              <Image
              className={styles.client__page__logo}
              src="/logos/mercadolibreLogo.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '400px',}}
              />
            </div>
            <div className={styles.client__info}>
              <p>
                Se ha gestionado la cobertura del evento deportivo Southfit 2023 del que Mercado libre participa como sponsor oficial.   
              </p>
            </div>
            <div className={styles.client__info} style={{marginTop:  '5rem'}}>
          <div>
            
            <p className={styles.subtitle}>SERVICIOS</p>
          </div>
          <div className={styles.client__info__list}>
              <p>‐ Content</p>
            </div>

        </div>
        </motion.div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>VIDEO</p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef2}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide} style={{maxWidth: '25rem'}}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image} style={{maxWidth: '25rem'}}>
                        <source src="/mercadolibre/mercadolibre.mp4" />
                      </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
