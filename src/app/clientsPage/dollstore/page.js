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
      <div>
        <Image
                  src="/dollstore/dollstoreBanner.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%',maxHeight: '100vh', position: 'fixed', objectFit: 'cover', right: '0', top: '0', pointerEvents: 'none', zIndex: '-1' }}
              />

        </div>
      <div className={styles.client__page}>
        <motion.div
          className={styles.client__banner} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
          transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 }
          
          }}>
            <div className={styles.service__banner}>
              <Image
              className={styles.logo}
              src="/logos/dollstoreLogo.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px', marginBottom: '-7vh'}}
              />
            </div>
            <div className={styles.client__info}>
          <div>
            <p className={styles.subtitle}>Servicios</p>
          </div>
          <div>
              <p>Análisis y estrategia</p>
              <p>Community management</p>
              <p>Calendarización</p>
              <p>Diseño</p>
            </div>

        </div>
        </motion.div>
        <div className={styles.client__content}>
          <div>
            <p className={styles.client__title}>SALE 2024</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            {/* <p style={{margin: "auto", fontSize: '3rem', alignSelf: 'center', padding: '2rem'}}> {'<'} </p> */}
            <div className={styles.client__images}>
              <Image
                  className={styles.client__image}
                  src="/dollstore/sale241.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/sale242.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/sale243.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
            </div>
            {/* <p style={{margin: "auto", fontSize: '3rem', alignSelf: 'center', padding: '2rem'}}> {'>'} </p> */}

            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <div>
            <p className={styles.client__title}>SALE 2023</p>
            <Image
                  className={styles.client__image}
                  src="/dollstore/sale23text.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
            <div className={styles.client__images}>
              <video autoPlay muted controls loop playsInline className={styles.client__image}>
                  <source src="/dollstore/sale23.mp4" />
              </video>
              <Image
                  className={styles.client__image}
                  src="/dollstore/sale23.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
            </div>
          </div>
          {/* <div style={{background: 'black', position: 'fixed', height:'50vh', width: '50vw',bottom: '0', zIndex: '-3', marginTop: '200px'}}>

          </div> */}
        </div>
        <div className={styles.client__content}>
          <div data-scroll data-scroll-speed="0.7">
            <p className={styles.client__title}>NAVIDAD 2023</p>
            <Image
                  className={styles.client__image}
                  src="/dollstore/dollstore navidad GIFT silver 4.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
            <div className={styles.client__images}>
              <video control autoPlay muted  loop playsInline className={styles.client__image}>
                  <source src="/dollstore/navidadVideo.mp4" />
              </video>
              <Image
                  className={styles.client__image}
                  src="/dollstore/navidad1.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/navidad2.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/navidad3.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/navidad4.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/navidad5.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/navidad6.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/navidad7.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <div data-scroll data-scroll-speed="0.7">
            <p className={styles.client__title}>LLEVATE TODO DOLL</p>
            <div >
              <p className={styles.subtitle}>Carnaval</p>
              <div className={styles.client__images}>
                <Image
                    className={styles.client__image}
                    src="/dollstore/llevatetododoll1.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <Image
                    className={styles.client__image}
                    src="/dollstore/llevatetododoll2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <Image
                    className={styles.client__image}
                    src="/dollstore/llevatetododoll3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
              </div>
            </div>
            <div >
              <p className={styles.subtitle}>Summer Edition</p>
              <div className={styles.client__images}>
                <video controls autoPlay muted  loop playsInline className={styles.client__image}>
                    <source src="/dollstore/llevatetododollsummerreel.mp4" />
                </video>
                <Image
                    className={styles.client__image}
                    src="/dollstore/llevatetododollsum1.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <Image
                    className={styles.client__image}
                    src="/dollstore/llevatetododollsum2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <Image
                    className={styles.client__image}
                    src="/dollstore/llevatetododollsum3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <div>
            <p className={styles.client__title}>FINAL SALE</p>
            <Image
                  className={styles.client__image}
                  src="/dollstore/finalsaledollstorelogo.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
            <div className={styles.client__images}>
              <video controls autoPlay muted  loop playsInline className={styles.client__image}>
                  <source src="/dollstore/finalsalereel.mp4" />
              </video>
              <Image
                  className={styles.client__image}
                  src="/dollstore/finalsale1.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
              />
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}
