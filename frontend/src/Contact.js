import './Contact.css';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Printer, AtSign, MailQuestion, User, Files  } from 'lucide-react';

export const Contact = () => {
  const form = useRef();

  const [message, setMessage] = useState(""); 

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_b93aryn", "template_bw8yozq", form.current, "KwtXFYf8UUSVDj89A").then(
      (result) => {
        console.log(result.text);
        setMessage("Votre message a été envoyé avec succès !");
        form.current.reset(); 
        setEmail(''); 
        setPhone(''); 
      },
      (error) => {
        console.log(error.text);
        setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    );
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      setEmailError('Adresse email non valide');
    } else {
      setEmailError('');
    }
  };  

  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value;
    setPhone(inputPhone);

    const phoneRegex = /^[0-9]{10}$/; 
    if (!phoneRegex.test(inputPhone)) {
      setPhoneError('Numéro de téléphone non valide.');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact'>
      <h3 className='coordonnes'>Coordonnées</h3>
      <p className='p_contact'>
        N’hésitez pas à contacter directement Maître Dalia MIMOUN qui répondra à toutes vos questions. <br></br>
        Le cabinet est ouvert du lundi au vendredi de 9h00 à 17h00, sur rendez-vous uniquement.<br></br>
        <div className='infos'><Phone size={15} className='icon' /> Téléphone: <a href='tel:+33119881505' className='tel'>01.49.88.15.05</a> <Printer size={15} className='icon'/> Fax: 01.79.75.38.18<br></br>
        <AtSign size={15} className='icon' /> Email: <a href='mailto:avocat@mimoun.org' className='tel'>avocat@mimoun.org</a> <Files size={15} className='icon' /> Toque: 29 </div>
      </p>
      <p className='p_contact_mob'>
         N’hésitez pas à contacter directement Maître Dalia MIMOUN et elle répondra à toutes vos questions. 
         Dans tous les cas, les frais de consultation vous seront déduits en cas de procédure subséquente.<br></br>
         Le cabinet est ouvert du lundi au vendredi de 8h00 à 18h00, sur rendez-vous uniquement.<br></br>
         <div className='infos'><Phone size={15} className='icon' /> Téléphone: <a href='tel:+33119881505' className='tel'>01.49.88.15.05</a> <br></br>
         <Printer size={15} className='icon'/> Fax: 01.79.75.38.18<br></br>
         <AtSign size={15} className='icon' /> Email: <a href='mailto:avocat@mimoun.org' className='tel'>avocat@mimoun.org</a> <br></br>
         <Files size={15} className='icon' /> Toque: 29 </div>
       </p>
      <h3 className='send_mail'>Envoyer un message</h3>
      <div className='c_form'>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className='inputBox'>
            <input type="text" name="name" className='fInputName' required />
            <span><User size={20} /> Nom Prénom</span>
          </div>
          <div className='inputBox'>
            <input type="text" name="email" className='fInputMail' required value={email} onChange={handleEmailChange} />       
            <span><AtSign size={18} /> Email</span>
          </div>
          <div className='inputBox'>
            <input type="text" name="phone" className='fInputTel' required value={phone} onChange={handlePhoneChange} />
            <span><Phone size={20} /> Téléphone</span>
          </div>
          <div className='inputBox'>
            <textarea name="message" className='fInput' required />
            <span className='mess'><MailQuestion size={18} /> Message</span>
          </div>
          {(emailError || phoneError) && <div className="error_message">Adresse email et/ou téléphone<br></br> non valide(s). <br></br>Merci de bien remplir <br></br>le formulaire.</div>}
          <button type="submit" className='btn_send' disabled={emailError || phoneError}>Envoyer</button>
        </form>
      </div>
      <div className='msg'>
        {message && <p className={`message ${message.startsWith("Une erreur") ? "error" : "success"}`}>{message}</p>}
      </div>
    </div>
  );
};

export default Contact;