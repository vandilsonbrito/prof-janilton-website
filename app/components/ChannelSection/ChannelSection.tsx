'use client'
import { GrYoutube } from 'react-icons/gr'; 
import AOS from 'aos';
import { useEffect } from 'react';

export default function CanalSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <section className="w-full h-full bg-main-blue text-white font-Montserrat px-8 py-14 lg:py-20 flex flex-col items-center relative" >
      <h3 className="uppercase font-bold text-lg md:text-3xl" id='/canal' data-aos="fade-up">Meu canal do YouTube</h3>
      <iframe src="" title='Canal do YouTube do Professor Janilton Almeida' className="w-[350px] h-[220px] sm:w-[480px] sm:h-[320px] md:w-[520px] md:h-[360px] lg:w-[650px] lg:h-[380px]  mt-8 md:mt-12 border-[8px] border-white bg-slate-600 text-white" data-aos="fade-up"></iframe>
      <p data-aos="fade-up" className='absolute top-52 md:top-[340px] text-2xl'>Em breve...</p>
      <a href="https://www.youtube.com/@prof.janiltonalmeida8089" target="_blank" rel="noopener noreferrer" className='mt-6'>
        <button className="w-fit flex items-center gap-3 h-[50px] bg-blue-600 text-white p-6 rounded-3xl font-semibold uppercase text-[1.05rem] border-[2px] border-blue-600 hover:border-white duration-200 ease-in-out active:scale-[0.98]">Conheça meu canal <GrYoutube className='mb-1 text-lg'/></button>
      </a>
    </section>
  )
}
