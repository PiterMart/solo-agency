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
  
      formData.append("access_key", "5708937d-8c8d-405f-b8d6-dbd75827398e");
  
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
        <div className={styles.footer__section__navs}>
          <div className={styles.footer__section}>
            <p className={styles.subtitle}>KNOW MORE</p>
            <p><Link href="/about">ABOUT US</Link></p>
            <p><Link href="/services">SERVICES</Link></p>
            <p><Link href="/clients">CLIENTS</Link></p>
            <p><Link href="/contact">CONTACT</Link></p>
          </div>
          <div className={styles.footer__section}>
            <p className={styles.subtitle}>FOLLOW US</p>
            <p><a href="https://www.instagram.com/solo_agency/" target="blank">INSTAGRAM</a></p>
            <p><a href="https://wa.me/+541131313954" target="blank">WHATSAPP</a></p>
            <p><a href="https://www.behance.net/soloagency6" target="blank">LINKEDIN</a></p>
            <p><a href="https://www.linkedin.com/company/soloagency6/" target="blank">BEHANCE</a></p>
          </div>
        </div>
        <div className={styles.footer__section}>
          <div style={{textAlign: 'center'}}>
            <p className={styles.subtitle} style={{marginBottom: '1rem', textAlign: 'left'}}>SUSCRiBITE A NUESTRO NEWSLETTER</p>
            <div className={styles.form__container} style={{width: '100%', margin: '0'}}>
              <form onSubmit={onSubmit} className={styles.form} style={{width: '95%'}}>
                <input type="hidden" name="access_key" value="5708937d-8c8d-405f-b8d6-dbd75827398e"/>
                {/* <p>Email</p> */}
                <input type="email" name="email" placeholder="email" required/>
                <button className={styles.button} type="submit">ENVIAR</button>
                <span>{result}</span>
              </form>
          </div>
          </div>
        </div>
      </div>
    </div> 
  )
}