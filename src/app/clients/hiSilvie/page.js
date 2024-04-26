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
              src="/logos/hisilvieLogo.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px',}}
              />
            </div>
            <div className={styles.client__info}>
              <p>
                Caso de éxito Solo Agency. Bajo la estrategia creativa, la generación de contenido y el análisis de métricas convertimos al perfil de silvie en una marca referente de moda argentina consiguiendo más de 100.000 seguidores en tres meses.   
              </p>
            </div>
            <div className={styles.client__info} style={{marginTop:  '5rem'}}>
          <div>
            
            <p className={styles.subtitle}>SERVICIOS</p>
          </div>
          <div className={styles.client__info__list}>
              <p>‐ Creative Strategy</p>
              <p>‐ Production & Styling</p>
              <p>‐ Content</p>
            </div>

        </div>
        </motion.div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <Image
              src="/hisilvie/Mediakit Hisilvie español_page-0001.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '30px', padding: '1rem'}}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/hisilvie/Mediakit Hisilvie español_page-0002.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '30px', padding: '1rem'}}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/hisilvie/Mediakit Hisilvie español_page-0003.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '30px', padding: '1rem'}}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/hisilvie/Mediakit Hisilvie español_page-0004.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '30px', padding: '1rem'}}
            />
          </div>
        </div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
          <p className={styles.client__title}>PHOTO</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
            </div>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie3.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie4.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie5.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie6.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.client__title}>VIDEO</p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef2}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/hisilvie/LOOK OLD MONEY final_H.264.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/hisilvie/looks inspirados en... SILVIE_H.264.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/hisilvie/looks para ir a trabajar SILVIE_H.264.mp4" />
                      </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.client__content} style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '1rem'}}>
            <p className={styles.subtitle}>Before</p>
            <p className={styles.subtitle}>After</p>
          </div>
          <div className={styles.client__images} style={{justifyContent: 'space-around'}}>
              <Image
                className={styles.client__image}
                src="/hisilvie/Graphic 01.jpg"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                className={styles.client__image}
                src="/hisilvie/Graphic 02.jpg"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
          </div>
        </div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title} style={{fontSize: '34px'}}>#UNCAFECONVOS</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
            </div>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef6}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <video autoPlay muted controls loop playsInline className={styles.client__image}>
                      <source src="/hisilvie/uncafeconvos.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <video autoPlay muted controls loop playsInline className={styles.client__image}>
                      <source src="/hisilvie/uncafeconvos2.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <video autoPlay muted controls loop playsInline className={styles.client__image}>
                      <source src="/hisilvie/uncafeconvos3.mp4" />
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
