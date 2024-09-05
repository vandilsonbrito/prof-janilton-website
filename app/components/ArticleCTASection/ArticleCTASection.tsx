'use client'
import { GrArticle } from 'react-icons/gr';
import { FaPencilAlt } from 'react-icons/fa';
import AOS from 'aos';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ArticleMenuSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <section className="w-full h-full flex flex-col items-center bg-white px-20 pt-10 pb-20 lg:pb-32 font-Montserrat">
        <div className='w-[90%] md:w-[80%] border-t-[1px] border-main-blue pb-16 lg:pb-24'></div>
        <div className="w-full flex flex-col items-center gap-8" data-aos="fade-up">
          <h2 className='text-2xl leading-normal md:text-3xl uppercase font-semibold text-center'>Acompanhe meus artigos de opinião</h2>
          <p className='hidden sm:flex lg:text-lg text-center'>Compartilho experiências, reflexões e insights ligados a prática pedagógica, iniciação científica e ensino de geografia.</p>
        </div>
        <div className="flex py-12 lg:py-16" data-aos="fade-up">
            <GrArticle className='text-5xl'/>
            <FaPencilAlt className='text-4xl'/>
        </div>
        <Link href='/artigos' >
          <button className="w-fit flex items-center h-[50px] bg-blue-600 hover:bg-blue-700 text-white tracking-wider p-6 px-10 rounded-3xl font-semibold uppercase text-[1.05rem] duration-200 ease-in-out active:scale-[0.98]">Ver artigos</button>
        </Link>
    </section>
  )
}
