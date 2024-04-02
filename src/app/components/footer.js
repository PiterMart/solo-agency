import Link from "next/link";  
import Image from "next/image";  
        
        
        <div className={styles.footer}>
          <div className={styles.contentSection} style={{borderTop: '0px solid #ffffff', marginTop: '1rem'}}>

          </div>
          <div className={styles.smLinks}>
              <p><Link href="/artists">Instagram</Link></p>
              <p><Link href="/exhibitions">LinkedIn</Link></p>
              <p><Link href="/contact">Twitter</Link></p>
              <p><Link href="/contact">Facebook</Link></p>
          </div>
          <div className={styles.endpage}>
            <Link href="/">
            <Image
                    src="/SOLO AGENCY LOGO TYPO NEGRO.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '70rem', paddingTop: '5rem' }}
                    alt="Picture of the author"
            />
            </Link>
          </div>
        </div> 