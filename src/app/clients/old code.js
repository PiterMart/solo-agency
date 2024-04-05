export default function Clients() {

    const [selected, setSelected] = useState(null)
  
    const toggle = (i) => {
      if (selected == i){
        return setSelected(null)
      }
  
      setSelected(i)
    }
    
  
    return (
      <main className={styles.main} >
        <div className={styles.page}>
  
        <div className={styles.page__title}>
            <p className={styles.title}>CLIENTS</p>
            <p>En Solo Agency nos enorgullece ser tu aliado creativo en el mundo de la identidad visual. Nuestro enfoque se centra en potenciar tus valores y comunicar todo aquello que no se puede expresar con palabras.</p>
        </div>
        <div className={styles.services_container}>
            {categories.map((category, i) => {
              return(
                <div key={i} className={styles.service}>
                  <div className={styles.service__banner}
                  // onClick={() => {setIsActive(!isActive)}}
                  onClick={() => toggle(i)}
                  >
                    <p className={styles.section_title}>{category.name}</p>
                    <span className={styles.cross}>{selected === i ? '_' : "+"}</span>
                  </div>
                  <div className={selected == i ?  'page_service__list__show__37KEC' : 'page_service__list__aU9Ez'}>          
                      <p className={styles.subtitle}>{category.item1}</p>
                      <p className={styles.subtitle}>{category.item2}</p>
                      <p className={styles.subtitle}>{category.item3}</p>
                      <p className={styles.subtitle}>{category.item4}</p>
                      <p className={styles.subtitle}>{category.item5}</p>
                  </div>
                </div>
              )
            })}
        </div>
  
        </div>
  
      </main>
  
    );
  }
  