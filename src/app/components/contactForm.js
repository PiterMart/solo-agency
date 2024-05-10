import React from "react";
import styles from '.././page.module.css'

export default function ContactForm() {
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
        setResult("Muchas gracias!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <div className={styles.form__container}>
        {/* <p style={{textAlign: 'left', width: '90%'}} className={styles.contact__page__title}>CONTANOS TU PROPUESTA</p> */}
        <form onSubmit={onSubmit} className={styles.form}>
          <input type="hidden" name="access_key" value="6604ebc9-8946-4dbe-aec9-5bcfb8f95429"/>
          {/* <p>Nombre</p> */}
          <input type="text" name="Name" placeholder="name" required/>
          {/* <p>Email</p> */}
          <input type="email" name="Email" placeholder="email" required/>
          {/* <p>MENSAJE</p> */}
          <textarea name="message" placeholder="Message" required></textarea>
          <span style={{height: '2.5rem', color: 'gray'}}>{result}</span>
          <button className={styles.button} type="submit">ENVIAR</button>
        </form>
      </div>
    );
  }