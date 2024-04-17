'use client'
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
import styles from "../../page.module.css"
import Image from "next/image";
import React, { useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '2000', jump: 'false', stopOnMouseEnter: 'true', playOnInit: 'true'})])
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

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
              className={styles.client__page__logo}
              src="/logos/dollstoreLogo.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px',}}
              />
            </div>
            <div className={styles.client__info} style={{marginTop:  '5rem'}}>
          <div>
            <p className={styles.subtitle}>SERVICIOS</p>
          </div>
          <div className={styles.client__info__list}>
              <p>‐ Creative Strategy</p>
              <p>‐ Social Media</p>
              <p>‐ Content</p>
              <p>‐ Paid Media</p>
              <p>‐ 3D Design</p>
            </div>

        </div>
        </motion.div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>SALE 2024</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
              <p className={styles.client__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius lectus ac leo ultricies, ac pellentesque sem semper. Etiam tempor nisl nec lectus molestie mattis. </p>
            </div>
            <Image
                className={styles.client__image}
                src="/dollstore/sale preview 4 png.png"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
                data-scroll data-scroll-speed="0.1"
                style={{border: "none", margin: '-2rem'}}
              />
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/sale241.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/sale242.png"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    /> 
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/sale243.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <button className={styles.embla__prev} onClick={scrollPrev}>
                  {'<'}
                </button>
                <button className={styles.embla__next} onClick={scrollNext}>
                  {'>'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>SALE 2023</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
              {/* <div className={styles.client__info__list}>
                <p>‐ Photo</p>
                <p>‐ 3d</p>
                <p>‐ Graphic Design</p>
              </div> */}
              <p className={styles.client__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius lectus ac leo ultricies, ac pellentesque sem semper. Etiam tempor nisl nec lectus molestie mattis. </p>
            </div>
            <Image
                  className={styles.client__image}
                  src="/dollstore/sale23text.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none", margin: '-2rem'}}
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
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>NAVIDAD 2023</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
              {/* <div className={styles.client__info__list}>
                <p>‐ Photo</p>
                <p>‐ 3d</p>
                <p>‐ Graphic Design</p>
              </div> */}
              <p className={styles.client__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius lectus ac leo ultricies, ac pellentesque sem semper. Etiam tempor nisl nec lectus molestie mattis. </p>
            </div>
            <Image
                  className={styles.client__image}
                  src="/dollstore/dollstore navidad GIFT silver 4.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none", margin: '-2rem'}}
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
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>LLEVATE TODO DOLL</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
              {/* <div className={styles.client__info__list}>
                <p>‐ Photo</p>
                <p>‐ 3d</p>
                <p>‐ Graphic Design</p>
              </div> */}
              <p className={styles.client__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius lectus ac leo ultricies, ac pellentesque sem semper. Etiam tempor nisl nec lectus molestie mattis. </p>
            </div>
            <div >
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
            {/* <p className={styles.client__content__subtitle}>Summer Edition</p> */}
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
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>FINAL SALE</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
              {/* <div className={styles.client__info__list}>
                <p>‐ Photo</p>
                <p>‐ 3d</p>
                <p>‐ Graphic Design</p>
              </div> */}
              <p className={styles.client__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius lectus ac leo ultricies, ac pellentesque sem semper. Etiam tempor nisl nec lectus molestie mattis. </p>
            </div>
            <Image
                  className={styles.client__image}
                  src="/dollstore/finalsaledollstorelogo.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none", margin: '-2rem'}}
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
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>DIGITAL BRANDING</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
              {/* <div className={styles.client__info__list}>
                <p>‐ Photo</p>
                <p>‐ 3d</p>
                <p>‐ Graphic Design</p>
              </div> */}
              <p className={styles.client__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius lectus ac leo ultricies, ac pellentesque sem semper. Etiam tempor nisl nec lectus molestie mattis. </p>
            </div>
            <div className={styles.client__images}>
              <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding1.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding2.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding3.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
              {/* <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding4.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              /> */}
              <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding5.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding6.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding7.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding8.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
              <Image
                  className={styles.client__image}
                  src="/dollstore/digitalbranding9.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
                  style={{border: "none"}}
              />
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}
