'use client'
import Image from "next/image";
import { useEffect } from "react";
import styles from '../page.module.css'
import Flecha2 from "../components/flecha2";
import { useState } from "react";
import React from 'react';
import Inner from "../inner/inner";



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
    { name: 'AIA', imageLocation: '/logos/aiaLogo.png', category: 'Fashion', route: ''},
    { name: 'Thurman', imageLocation: '/logos/thurmanLogo.png', category: 'Fashion', route: ''},
    { name: 'Cape Diablo', imageLocation: '/logos/capediabloLogo.png', category: 'Fashion', route: ''},
    { name: 'Charro', imageLocation: '/logos/charroLogo.png', category: 'Fashion', route: ''},
    { name: 'Cristho', imageLocation: '/logos/cristhoLogo.png', category: 'Fashion', route: ''},
    { name: 'dollstore', imageLocation: '/logos/dollstoreLogo.png', category: 'Fashion', route: ''},
    { name: 'dsmen', imageLocation: '/logos/dsmenLogo.png', category: 'Fashion', route: ''},
    { name: 'Justa Osadia', imageLocation: '/logos/justaosadiaLogo.png', category: 'Fashion', route: ''},
    { name: 'Pucheta', imageLocation: '/logos/puchetaLogo.png', category: 'Fashion', route: ''},
    { name: 'Zorzal del vaga', imageLocation: '/logos/zorzaldelvagaLogo.png', category: 'Fashion', route: ''},
    { name: 'HiSilvie', imageLocation: '/logos/hisilvieLogo.png', category: 'Creators' },
    { name: 'Fabian Paz', imageLocation: '/logos/pazLogo.png', category: 'Creators' },
    // { name: '#uncafeconvos', imageLocation: 'no tiene', category: 'Creators' },
    // { name: 'ALEJO', imageLocation: 'No tiene', category: 'Creators' },
    // Add more brand objects here
    { name: 'UMO', imageLocation: '/logos/umoLogo.png', category: 'Lifestyle' },
    { name: 'UBK', imageLocation: '/logos/ubkLogo.png', category: 'Lifestyle' },
    { name: 'Pimux', imageLocation: '/logos/pimuxLogo.png', category: 'Lifestyle' },
    { name: 'Mercado Libre', imageLocation: '/logos/mercadolibreLogo.png', category: 'Lifestyle' },
    { name: 'Lagouarde', imageLocation: '/logos/lagouardeLogo.png', category: 'Lifestyle' },
    { name: 'Impulse', imageLocation: '/logos/', category: 'Lifestyle' },
    { name: 'Faithful', imageLocation: '/logos/faitfulLogo.png', category: 'Lifestyle' },
    { name: 'El Gourmet', imageLocation: '/logos/elgourmetLogo.png', category: 'Lifestyle' },
    { name: 'Dr Aromas', imageLocation: '/logos/doctoraromasLogo.png', category: 'Lifestyle' },
    { name: 'DA Design', imageLocation: '/logos/dadesignLogo.png', category: 'Lifestyle' },
    { name: 'Compañia Nativa', imageLocation: '/logos/companianativaLogo.png', category: 'Lifestyle' },
    { name: 'Belgika Home', imageLocation: 'No tiene', category: 'Lifestyle' },
    { name: 'Terrazas de los Andes', imageLocation: '/logos/terrazasdelosandesLogo.png', category: 'Food & other pleasures' },
    { name: 'Lagouarde Catering', imageLocation: '/logos/lagouardeLogo.png', category: 'Food & other pleasures' },
    { name: 'Celebre in culina', imageLocation: '/logos/celebreinculinaLogo.png', category: 'Food & other pleasures' },
    { name: 'Yellow', imageLocation: '/logos/yellowLogo.png', category: 'Health & beauty' },
    { name: 'Timeless', imageLocation: '/logos/timelessLogo.png', category: 'Health & beauty' },
    { name: 'LiteBrush', imageLocation: '/logos/litebrushLogo.png', category: 'Health & beauty' },
    { name: 'Lidherma', imageLocation: '/logos/lidhermaLogo.png', category: 'Health & beauty' },
    { name: 'JP Peluquerias', imageLocation: '/logos/jpLogo.png', category: 'Health & beauty' },
    { name: 'Fran Klein', imageLocation: '/logos/kleinLogo.png', category: 'Health & beauty' },
    { name: 'Eucerin', imageLocation: '/logos/eucerinLogo.png', category: 'Health & beauty' },

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
                            <img src={brand.imageLocation} alt={brand.name} className={styles.client__logo} />
                            {/* <p>{brand.name}</p> */}
                          </div>
                        ))}
                  </div>
            </div>
          ))}
        </div>
      </Inner>
    </main>
  );
}
