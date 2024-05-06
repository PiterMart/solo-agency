'use client'
import { useEffect } from "react";
import styles from '../page.module.css'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Inner from "../inner/inner";
import Carousel from "../components/carousel";

export default function Services() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i){
      return setSelected(null)
    }
    setSelected(i)
  }

  const services = [
    { 
      name: 'Social Media',
      item1: '- Calendarizacion', 
      item2:'- Copywriting',
      item3: '- Posting'
    },
    {
      name: 'Paid Media',
      item1: '- Google ads',
      item2: '- Meta ads',
      item3: '- Mailing'
    },
    {
      name: 'Graphic design & branding',
      item1: '- Logo design',
      item2: '- BrandBooks',
      item3: '- Social Media',
      item4: '- Packaging',
      item5: '- Visual Merchandising'
    },
    {
      name: 'Content',
      item1: '- Photo',
      item2: '- Video',
    },
    {
      name: 'Creative Strategy',
      item1: '- Análisis',
      item2: '- Concept',
      item3: '- Report',
    },
    {
      name: 'Production & Styling',
      item1: '- Concept crafting',
      item2: '- Resources Management'
    },
    {
      name: '3D design',
      item1: '- Modeling',
      item2: '- Rendering',
      item3: '- Animation'
    },
  ]

  const  [isActive, setIsActive] = useState(true);

  useEffect( () => {
    
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className={styles.main} >
      <AnimatePresence mode="wait">
        <Inner>
          <div className={styles.page__info}>
              <p className={styles.title}>SERVICES</p>
              <p className={styles.page__description}>Solo Agency es una agencia creativa espacializada en el diseño de identidad visual y comunicacion efectiva.</p>
          </div>
          <div className={styles.services_container}>
            {services.map((service, i) => {
              return(
                <div key={i} className={styles.service}>
                  <div 
                    className={styles.service__banner}
                    onClick={() => toggle(i)}
                  >
                    <p className={styles.section_title}>{service.name}</p>
                    <span className={styles.cross}>{selected === i ? '_' : "+"}</span>
                  </div>
                  <div className={selected == i ?  'page_service__list__show__37KEC' : 'page_service__list__aU9Ez'}>          
                    <p className={styles.subtitle}>{service.item1}</p>
                    <p className={styles.subtitle}>{service.item2}</p>
                    <p className={styles.subtitle}>{service.item3}</p>
                    <p className={styles.subtitle}>{service.item4}</p>
                    <p className={styles.subtitle}>{service.item5}</p>
                  </div>
                </div>
              )
            })}
            <Carousel/>
          </div>
        </Inner>
      </AnimatePresence>
    </main>
  );
}
