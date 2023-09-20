import './Contact.css';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Printer, AtSign, MailQuestion, User } from 'lucide-react';

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_b93aryn", "template_bw8yozq", form.current, "KwtXFYf8UUSVDj89A").then(
      (result) => {
        console.log(result.text);
        setMessage("Votre message a été envoyé avec succès !");
        form.current.reset(); 
      },
      (error) => {
        console.log(error.text);
        setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    );
  };

  return (
    <div className='contact'>
      <h3 className='coordonnes'>Coordonnées</h3>
      <p className='p_contact'>
        N’hésitez pas à contacter directement Maître Dalia MIMOUN et <br></br>elle répondra à toutes vos questions. 
        Dans tous les cas, les frais de consultation vous <br></br>seront déduits en cas de procédure subséquente.<br></br>
        Le cabinet est ouvert du lundi au vendredi de 8h00 à 18h00, sur rendez-vous uniquement.
        <Phone size={15} className='icon' /> Téléphone: 01.49.88.15.05 <Printer size={15} className='icon'/> Fax: 01.79.75.38.18
      </p>
      <h3 className='send_mail'>Envoyer un message</h3>
      <div className='c_form'>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label><User size={20} /> Nom Prénom</label>
        <input type="text" name="name" placeholder="Votre nom et prénom" required />
        <label><AtSign size={18} /> Email</label>
        <input type="email" name="email" placeholder="Votre email" required />
        <label><Phone size={20} /> Téléphone</label>
        <input type="tel" name="phone" placeholder="Votre téléphone" />
        <label><MailQuestion size={18} /> Message</label>
        <textarea name="message" placeholder="Votre message" required />
        <button type="submit">Envoyer</button>
      </form>
      {message && <p className={`message ${message.startsWith("Une erreur") ? "error" : "success"}`}>{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
