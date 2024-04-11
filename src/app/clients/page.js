'use client'
import Image from "next/image";
import { useEffect } from "react";
import styles from '../page.module.css'
import Flecha2 from "../components/flecha2";
import { useState } from "react";
import React from 'react';
import Inner from "../inner/inner";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";



export default function Clients() {

  const  [isActive, setIsActive] = useState(true);

  useEffect( () => {
    
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  const [selected, setSelected] = useState(null)
  
    const toggle = (i) => {
      if (selected == i){
        return setSelected(null)
      }
  
      setSelected(i)
    }


  const brands = [
    // Assuming you have an array of brand objects
    { name: 'dollstore', imageLocation: '/logos/dollstoreLogo.png', category: 'Fashion', route: '/clientsPage/dollstore'},
    { name: 'AIA', imageLocation: '/logos/aiaLogo.png', category: 'Fashion', route: '/clientsPage/aia'},
    { name: 'Thurman', imageLocation: '/logos/thurmanLogo.png', category: 'Fashion', route: '/clientsPage/thurman'},
    { name: 'Cape Diablo', imageLocation: '/logos/capediabloLogo.png', category: 'Fashion', route: '/clientsPage/capeDiablo'},
    { name: 'Charro', imageLocation: '/logos/charroLogo.png', category: 'Fashion', route: '/clientsPage/charro'},
    { name: 'Cristho', imageLocation: '/logos/cristhoLogo.png', category: 'Fashion', route: '/clientsPage/aia'},
    { name: 'dsmen', imageLocation: '/logos/dsmenLogo.png', category: 'Fashion', route: '/clientsPage/aia'},
    { name: 'Justa Osadia', imageLocation: '/logos/justaosadiaLogo.png', category: 'Fashion', route: '/clientsPage/aia'},
    { name: 'Pucheta', imageLocation: '/logos/puchetaLogo.png', category: 'Fashion', route: '/clientsPage/aia'},
    { name: 'Zorzal del vaga', imageLocation: '/logos/zorzaldelvagaLogo.png', category: 'Fashion', route: '/clientsPage/aia'},
    { name: 'HiSilvie', imageLocation: '/logos/hisilvieLogo.png', category: 'Creators', route: '/clientsPage/aia' },
    { name: 'Fabian Paz', imageLocation: '/logos/pazLogo.png', category: 'Creators', route: '/clientsPage/aia' },
    // { name: '#uncafeconvos', imageLocation: 'no tiene', category: 'Creators' },
    // { name: 'ALEJO', imageLocation: 'No tiene', category: 'Creators' },
    // Add more brand objects here
    { name: 'UMO', imageLocation: '/logos/umoLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'UBK', imageLocation: '/logos/ubkLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Pimux', imageLocation: '/logos/pimuxLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Mercado Libre', imageLocation: '/logos/mercadolibreLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Lagouarde', imageLocation: '/logos/lagouardeLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Impulse', imageLocation: '/logos/', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Faithful', imageLocation: '/logos/faitfulLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'El Gourmet', imageLocation: '/logos/elgourmetLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Dr Aromas', imageLocation: '/logos/doctoraromasLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'DA Design', imageLocation: '/logos/dadesignLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Compañia Nativa', imageLocation: '/logos/companianativaLogo.png', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Belgika Home', imageLocation: 'No tiene', category: 'Lifestyle', route: '/clientsPage/aia' },
    { name: 'Terrazas de los Andes', imageLocation: '/logos/terrazasdelosandesLogo.png', category: 'Food & other pleasures', route: '/clientsPage/aia' },
    { name: 'Lagouarde Catering', imageLocation: '/logos/lagouardeLogo.png', category: 'Food & other pleasures', route: '/clientsPage/aia' },
    { name: 'Celebre in culina', imageLocation: '/logos/celebreinculinaLogo.png', category: 'Food & other pleasures', route: '/clientsPage/aia' },
    { name: 'Yellow', imageLocation: '/logos/yellowLogo.png', category: 'Health & beauty', route: '/clientsPage/aia' },
    { name: 'Timeless', imageLocation: '/logos/timelessLogo.png', category: 'Health & beauty', route: '/clientsPage/aia' },
    { name: 'LiteBrush', imageLocation: '/logos/litebrushLogo.png', category: 'Health & beauty', route: '/clientsPage/aia' },
    { name: 'Lidherma', imageLocation: '/logos/lidhermaLogo.png', category: 'Health & beauty', route: '/clientsPage/aia' },
    { name: 'JP Peluquerias', imageLocation: '/logos/jpLogo.png', category: 'Health & beauty', route: '/clientsPage/aia' },
    { name: 'Fran Klein', imageLocation: '/logos/kleinLogo.png', category: 'Health & beauty', route: '/clientsPage/aia' },
    { name: 'Eucerin', imageLocation: '/logos/eucerinLogo.png', category: 'Health & beauty', route: '/clientsPage/aia' },

  ];

  const categories = [
    // Assuming you have an array of category objects
    { name: 'Fashion',},
    { name: 'Creators', },
    { name: 'Lifestyle',},
    { name: 'Food & other pleasures', },
    { name: 'Health & beauty', },
    // Add more category objects here
  ];


  return (
          
    <main className={styles.main} >
      <AnimatePresence mode="wait"> 
        <Inner>
          <div className={styles.page__title}>
            <p className={styles.title}>CLIENTS</p>
            <p className={styles.description}>En Solo Agency nos enorgullece ser tu aliado creativo en el mundo de la identidad visual. Nuestro enfoque se centra en potenciar tus valores y comunicar todo aquello que no se puede expresar con palabras.</p>
          </div>
          <div className={styles.services_container}>
            {categories.map((category, i) => (
              <div key={i} className={styles.service}>
                <div className={styles.service__banner}
                    // onClick={() => {setIsActive(!isActive)}}
                    onClick={() => toggle(i)}
                    >
                      <p className={styles.section_title}>{category.name}</p>
                      <span className={styles.cross}>{selected === i ? '_' : "+"}</span>
                    </div>
                    <div className={selected == i ?  'page_service__list__show__37KEC' : 'page_service__list__aU9Ez'}>
                        {brands
                          .filter(brand => brand.category === category.name)
                          .map((brand, brandIndex) => (
                            <div key={brandIndex}>
                              <Link href={brand.route} alt={brand.name}>
                              <img src={brand.imageLocation} alt={brand.name} className={styles.client__logo} />
                              {/* <p>{brand.name}</p> */}
                              </Link>
                            </div>
                          ))}
                    </div>
              </div>
            ))}
          </div>
        </Inner>
      </AnimatePresence>   
    </main>
  );
}
