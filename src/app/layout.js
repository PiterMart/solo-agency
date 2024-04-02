import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./components/nav";
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solo Agency",
  description: "",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
      <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', filter: 'brightness(50%)' }}>
        <source src="/3dBackground.mp4" />
      </video>
        <Nav/>
        {children}
        <Footer data-scroll data-scroll-speed="0.7"/>
      </body>
    </html>
  );
}
