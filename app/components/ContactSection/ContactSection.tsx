'use client'
import { useState, useEffect, useRef } from "react";
import AOS from 'aos';

export default function ContactSection() {

    useEffect(() => {
      AOS.init({
        duration: 1000,
      })
    }, [])

    const STATIC_FORMS_KEY = process.env.NEXT_PUBLIC_STATIC_FORMS_KEY;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setContact({ ...contact, [e.target.name]: e.target.value });
    
    const [contact, setContact] = useState({
      name: '',
      email: '',
      subject: 'StaticForms - Contact Form',
      honeypot: '', // if any value received in this field, form submission will be ignored.
      message: '',
      replyTo: '@', 
      accessKey: STATIC_FORMS_KEY 
    });
    const [response, setResponse] = useState({
      type: '',
      message: ''
    });

    interface FormValues {
      name: string;
      email: string;
      message: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const res = await fetch('https://api.staticforms.xyz/submit', {
          method: 'POST',
          body: JSON.stringify(contact),
          headers: { 'Content-Type': 'application/json' }
        });

        setContact({ 
          name: '',
          email: '',
          subject: 'StaticForms - Contact Form',
          honeypot: '',
          message: '',
          replyTo: '@', 
          accessKey: STATIC_FORMS_KEY 
        });

        const json = await res.json();  
        if (json.success) {
          setResponse({
            type: 'success',
            message: 'Obrigado por entrar em contato comigo!'
          });
        } else {
          setResponse({
            type: 'error',
            message: json.message
          });
        }
      } catch (e) {
        console.log('An error occurred', e);
        setResponse({
          type: 'error',
          message: 'An error occured while submitting the form'
        });
      }
    };

    return (
      <section className="w-full h-full bg-white px-4 md:px-8 pt-12 pb-16 flex flex-col items-center border-t-2" id="/contato">
          <h3 className=" font-bold text-lg md:text-3xl mb-8 text-black" data-aos="fade-up">Entre em contato comigo</h3>

          <form action="https://api.staticforms.xyz/submit" 
          method="POST" 
          onSubmit={handleSubmit}
          className="w-[100%] md:w-[60%] max-w-[50rem] h-full flex flex-col items-center gap-8 border-4 px-5 py-8 sm:p-8 rounded-lg bg-[#dbdbdbdc]"
          data-aos="fade-up"
          >
              <div className="w-full">
                <label className="font-medium" htmlFor="name">Nome</label>
                <input
                type="text"
                name="name"
                className="w-full h-[45px] rounded-md px-3" placeholder="Digite Seu Nome" required maxLength={25} onChange={handleChange}
                value={contact.name}
                />
              </div>

              <div className="w-full">
                <label className="font-medium" htmlFor="email">Email</label>
                <input
                type="email"
                name="email"
                id="email"
                className="w-full h-[45px] rounded-md px-3" placeholder="Digite Seu E-mail" required maxLength={50} onChange={handleChange}
                value={contact.email}
                />
              </div>

              <div className="w-full">
                <label className="font-medium" htmlFor="message">Mensagem</label>
                <textarea
                name="message"
                className="w-full h-[100px] rounded-md px-3 pt-1"
                placeholder="Mensagem"
                required
                onChange={handleChange}
                value={contact.message}
                />
              </div>

              <input 
              type="submit"
              value="Enviar" 
              className="uppercase w-[50%] xl:w-[40%] h-[50px] rounded-lg bg-main-blue text-white text-lg lg:text-xl font-semibold  cursor-pointer hover:shadow-xl hover:bg-blue-800  active:scale-[0.98] ease-in-out duration-200"
              />
              <div className="w-full flex justify-center">
                  <p className=''>{response.type === 'error' ? 'Ocorreu um erro ao enviar. Tente novamente.' : response.message }</p>
              </div>
          </form>
      </section>
    )
} 
