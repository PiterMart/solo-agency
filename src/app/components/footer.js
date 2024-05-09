'use client'
import Link from "next/link";  
import React from "react";
import styles from "../page.module.css";
import Image from "next/image"; 

export default function Carousel(){

  const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6604ebc9-8946-4dbe-aec9-5bcfb8f95429");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Muchas gracias por suscribirte!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return(
    <div className={styles.footer}>
      <div className={styles.footer__section_container}>
        <div className={styles.footer__section}>
          <p className={styles.subtitle}>KNOW MORE</p>
          <p><Link href="/about">ABOUT US</Link></p>
          <p><Link href="/services">SERVICES</Link></p>
          <p><Link href="/clients">CLIENTS</Link></p>
          <p><Link href="/contact">CONTACT</Link></p>
        </div>
        <div style={{textAlign: 'center'}}>
        {/* <Image
          src="/SOLO AGENCY LOGO TYPO BLANCO.png"
          alt="Solo Agency"
          width={0}
          height={0}
          sizes="100vw"
          style={{width: '20rem', height: 'auto'}}
        /> */}
          {/* <p>NO SOMOS <strong>SOLO</strong> UNA AGENCIA</p> */}
          <p className={styles.subtitle} style={{margin: '1rem', textAlign: 'left'}}>SUSCRiBITE A NUESTRO NEWSLETTER</p>
          <p style={{margin: '1rem', textAlign: 'left'}}>Suscribite a nuestro newsletter para recibir noticias y ofertas exclusivas</p>
          <div className={styles.form__container} style={{width: '100%', margin: '0'}}>
            <form onSubmit={onSubmit} className={styles.form}>
              <input type="hidden" name="access_key" value="6604ebc9-8946-4dbe-aec9-5bcfb8f95429"/>
              {/* <p>Email</p> */}
              <input type="email" name="email" placeholder="email" required/>
              <button className={styles.button} type="submit">ENVIAR</button>
              <span>{result}</span>
            </form>
        </div>
        </div>
          <div className={styles.footer__section}>
            <p className={styles.subtitle}>FOLLOW US</p>
            <p><Link href="/artists">INSTAGRAM</Link></p>
            <p><Link href="/contact">WHATSAPP</Link></p>
            <p><Link href="/exhibitions">LINKEDIN</Link></p>
          </div>
      </div>
    </div> 
  )
}