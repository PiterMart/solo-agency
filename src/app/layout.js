import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solo Agency",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>

        {children}

        {/* <div className={styles.footer}>

          <h1 className={styles.idea}>Tenes una<br />idea?</h1>
            <div className={styles.availableP}>
                <p>contactanos</p>
                <Image
                  src="/FLECHA.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'height 200px', maxWidth: '15rem', paddingTop: '5rem' }}
                  alt="Picture of the author"
          />
            </div>

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
        </div> */}
        </body>
    </html>
  );
}
