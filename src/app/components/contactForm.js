import React from "react";
import styles from '.././page.module.css'

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6604ebc9-8946-4dbe-aec9-5bcfb8f95429");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className={styles.form__container}>
        <form onSubmit={onSubmit} className={styles.form}>
            <input type="hidden" name="access_key" value="6604ebc9-8946-4dbe-aec9-5bcfb8f95429"/>
            <p>Nombre</p>
            <input type="text" name="name" required/>
            <p>Email</p>
            <input type="email" name="email" required/>
            <p>Mensaje</p>
            <textarea name="message" required></textarea>
  
          <button className={styles.button} type="submit">ENVIAR</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }