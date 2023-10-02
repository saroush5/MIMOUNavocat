// import './MobileContact.css';
// import React, { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { Phone, Printer, AtSign, MailQuestion, User, Files  } from 'lucide-react';

// export const MobileContact = () => {
//   // const form = useRef();
//   // const [message, setMessage] = useState(""); 
//   // const [isEmailValid, setIsEmailValid] = useState(true);
//   // const [isPhoneValid, setIsPhoneValid] = useState(true);
//   // const [isFormValid, setIsFormValid] = useState(true);
//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   email: "",
//   //   phone: "",
//   //   message: ""
//   // });  

//   // const sendEmail = (e) => {
//   //   e.preventDefault();

//   //   if (!isFormValid) {
//   //     setMessage("Merci de bien remplir le formulaire.");
//   //     return;
//   //   }

//   //   emailjs.sendForm("service_b93aryn", "template_bw8yozq", form.current, "KwtXFYf8UUSVDj89A").then(
//   //     (result) => {
//   //       console.log(result.text);
//   //       setMessage("Votre message a été envoyé avec succès !");
//   //       form.current.reset();
//   //       setFormData({
//   //         name: "",
//   //         email: "",
//   //         phone: "",
//   //         message: ""
//   //       });
//   //     },
//   //     (error) => {
//   //       console.log(error.text);
//   //       setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
//   //     }
//   //   );
//   // };

//   // const [email, setEmail] = useState('');
//   // const [emailError, setEmailError] = useState('');

//   // const handleEmailChange = (e) => {
//   //   const inputEmail = e.target.value;
//   //   setEmail(inputEmail);

//   //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //   if (!emailRegex.test(inputEmail)) {
//   //     setEmailError('Adresse email non valide');
//   //     setIsEmailValid(false);
//   //     setIsFormValid(false); 
//   //   } else {
//   //     setEmailError('');
//   //     setIsEmailValid(true);
//   //     setIsFormValid(true); 
//   //   }
//   // };

//   // const [phone, setPhone] = useState('');
//   // const [phoneError, setPhoneError] = useState('');

//   // const handlePhoneChange = (e) => {
//   //   const inputPhone = e.target.value;
//   //   setPhone(inputPhone);

//   //   const phoneRegex = /^[0-9]{10}$/; 
//   //   if (!phoneRegex.test(inputPhone)) {
//   //     setPhoneError('Numéro de téléphone non valide.');
//   //     setIsPhoneValid(false);
//   //     setIsFormValid(false);
//   //   } else {
//   //     setPhoneError('');
//   //     setIsPhoneValid(true);
//   //     setIsFormValid(true); 
//   //   }
//   // };

//   const form = useRef();
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [emailError, setEmailError] = useState(false);
//   const [phoneError, setPhoneError] = useState(false);

//   useEffect(() => {
//     if (!emailError && !phoneError && message === "Adresse email et/ou téléphone non valide(s). Merci de bien remplir le formulaire.") {
//       seterror("");
//     }
//   }, [emailError, phoneError]);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // ... Validation de l'adresse e-mail et du numéro de téléphone ...

//     if (emailError || phoneError) {
//       setError("Adresse email et/ou téléphone non valide(s). Merci de bien remplir le formulaire.");
//     } else {
//       emailjs
//         .sendForm("service_b93aryn", "template_bw8yozq", form.current, "KwtXFYf8UUSVDj89A")
//         .then(
//           (result) => {
//             console.log(result.text);
//             setMessage("Votre message a été envoyé avec succès !");
//             form.current.reset();
//           },
//           (error) => {
//             console.log(error.text);
//             setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
//           }
//         );
//     }
//   };


//   return (
//     <div className='contact'>
//       <h3 className='coordonnes'>Coordonnées</h3>
//       <p className='p_contact'>
//         N’hésitez pas à contacter directement Maître Dalia MIMOUN et elle répondra à toutes vos questions. 
//         Dans tous les cas, les frais de consultation vous seront déduits en cas de procédure subséquente.<br></br>
//         Le cabinet est ouvert du lundi au vendredi de 8h00 à 18h00, sur rendez-vous uniquement.<br></br>
//         <div className='infos'><Phone size={15} className='icon' /> Téléphone: <a href='tel:+33119881505' className='tel'>01.49.88.15.05</a> <Printer size={15} className='icon'/> Fax: 01.79.75.38.18<br></br>
//         <AtSign size={15} className='icon' /> Email: <a href='mailto:avocat@mimoun.org' className='tel'>avocat@mimoun.org</a> <Files size={15} className='icon' /> Toque: 29 </div>
//       </p>
//       <p className='p_contact_mob'>
//         N’hésitez pas à contacter directement Maître Dalia MIMOUN et elle répondra à toutes vos questions. 
//         Dans tous les cas, les frais de consultation vous seront déduits en cas de procédure subséquente.<br></br>
//         Le cabinet est ouvert du lundi au vendredi de 8h00 à 18h00, sur rendez-vous uniquement.<br></br>
//         <div className='infos'><Phone size={15} className='icon' /> Téléphone: <a href='tel:+33119881505' className='tel'>01.49.88.15.05</a> <br></br>
//         <Printer size={15} className='icon'/> Fax: 01.79.75.38.18<br></br>
//         <AtSign size={15} className='icon' /> Email: <a href='mailto:avocat@mimoun.org' className='tel'>avocat@mimoun.org</a> <br></br>
//         <Files size={15} className='icon' /> Toque: 29 </div>
//       </p>
//       <h3 className='send_mail'>Envoyer un message</h3>
//       <div className='c_form'>
//       <form ref={form} onSubmit={sendEmail} className="form">
//         <div className='inputBox'>
//         <input
//   type="text"
//   name="name"
//   className='fInputName'
//   required
//   // value={formData.name}
//   // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// />
// <span><User size={20} /> Nom Prénom</span>
//         </div>
//         <div className='inputBox'>
//         <input
//   type="text"
//   name="email"
//   className='fInputMail'
//   required
//   // value={formData.email}
//   // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// />    
//       <span><AtSign size={18} /> Email</span>
//         </div>
//         <div className='inputBox'>
//         <input
//   type="text"
//   name="phone"
//   className='fInputTel'
//   required
//   // value={formData.phone}
//   // onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
// />
//           <span><Phone size={20} /> Téléphone</span>
//         </div>
//         <div className='inputBox'>
//         <textarea
//   name="message"
//   className='fInput'
//   required
//   // value={formData.message}
//   // onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// />          <span className='mess'><MailQuestion size={18} /> Message</span>
//         </div>
//         {(emailError || phoneError) && <div className="error-message">Adresse email et/ou téléphone non valide(s).<br></br> Merci de bien remplir le formulaire.</div>}

//         <button type="submit" className='btn_send' disabled={emailError || phoneError}>Envoyer</button>
//       </form>
//       </div>
//       {/* <div className='c_form_mob'>
//       <form ref={form_mob} onSubmit={sendEmail_mob} className="form_mob">
//         <div className='inputBox'>
//         <input
//   type="text"
//   name="name"
//   className='fInputName'
//   required
// />
// <span><User size={20} /> Nom Prénom</span>
//         </div>
//         <div className='inputBox'>
//         <input
//   type="text"
//   name="email"
//   className='fInputMail'
//   required
//   value={formData_mob.email}
//   onChange={(e) => {
//     handleInputChange_mob(e);
//     setPhoneError_mob("");
//   }}/>    
//       <span><AtSign size={18} /> Email</span>
//         </div>
//         <div className='inputBox'>
//         <input
//   type="text"
//   name="phone"
//   className='fInputTel'
//   required
//   value={formData_mob.phone}
//   onChange={(e) => {
//     handleInputChange_mob(e);
//     setEmailError_mob("");
//   }}
//     />
//           <span><Phone size={20} /> Téléphone</span>
//         </div>
//         <div className='inputBox'>
//         <textarea
//   name="message"
//   className='fInput'
//   required
//   />          <span className='mess'><MailQuestion size={18} /> Message</span>
//         </div>
//         <button type="submit" className='btn_send' disabled={isButtonDisabled_mob}>Envoyer</button>
//       </form>
//       </div> */}
//       {/* {emailError_mob && <div className="error-message">{emailError_mob}</div>}
//       {phoneError_mob && <div className="error-message">{phoneError_mob}</div>} */}

//       <div className='msg'>
//       {message && <div className={`message ${message.startsWith("Une erreur") ? "error" : "success"}`}>{message}</div>}
//       </div>
//     </div>
//   );
// };

// export default MobileContact;

