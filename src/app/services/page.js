'use client'
import Image from "next/image";
import { useEffect } from "react";
import styles from '../page.module.css'
import Flecha2 from "../components/flecha2";
import { useState } from "react";
import { motion } from "framer-motion";



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
      name: 'Community Management',
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
      item2: '- Brand Books',
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

    },
    {
      name: 'Production & Styling',

    },
    {
      name: '3D design',

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
      <div className={styles.page}>

      <div className={styles.page__title}>
          <p className={styles.title}>SERVICES</p>
          <p>Solo Agency es una agencia creativa espacializada en el diseño de identidad visual y comunicacion efectiva.</p>
      </div>
      <div className={styles.services_container}>
          {services.map((service, i, items) => {
            return(
              <div className={styles.service}>
              <div className={styles.service__banner}
              // onClick={() => {setIsActive(!isActive)}}
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

        {/* <div className={styles.service}>
          <div className={styles.service__banner}
          onClick={() => {setIsActive(!isActive)}}>
            <p className={styles.section_title}>Community Management</p>
            <Flecha2 
            style={{display: 'block'}}
            isActive={isActive} setIsActive={setIsActive}
            key={1}
            />
          </div>
          <motion.div className={styles.service__list__show}
          animate={{height: isActive ? "0": "auto"}}
          transition={{duration: 1, ease: [0.33, 1, 0.68, 1]}}>
            <p className={styles.subtitle}>Calendarización</p>
            <p className={styles.subtitle}>Copywriting</p>
            <p className={styles.subtitle}>Posting</p>

          </motion.div>

        </div> */}
      </div>

      </div>

    </main>

  );
}
