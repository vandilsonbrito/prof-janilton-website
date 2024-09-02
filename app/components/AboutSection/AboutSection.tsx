'use client'
import Janilton from '../../../public/about-pic.jpg';
/* import JaniltonMobile from '../../../public/imgs-janilton/foto-perfil2-mobile.webp'; */
import Aos from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useMedia from 'use-media';

export default function AboutSection() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    })
  }, []);
  const isMobile = useMedia({ maxWidth: '800px' });
  
  return (
    <section className="w-full max-w-[90rem] h-full bg-white my-10 font-Montserrat flex flex-col items-center  sm:my-16 px-7 sm:px-12 xl:px-24 lg:mb-20 text-black" id='/sobre'>
        
        <div className="w-full flex justify-center xl:mt-8 mb-2 lg:mb-10 xl:ml-56" data-aos="fade-up">
          <h2 className="uppercase font-semibold text-3xl md:text-5xl ">Sobre mim</h2>
        </div>
     
        <div className="w-full h-full flex flex-col xl:flex-row items-center gap-3 lg:gap-10">
            <div className="w-full h-full flex justify-center xl:self-start xl:mt-2" data-aos="fade-up">
              <Image 
                src={isMobile ? Janilton : Janilton}  
                width={700}
                height={700}
                alt="Imagem do Professor Janilton" 
                className='w-[280px] h-[380px] rounded-md my-6 sm:my-10 xl:my-0 flex '/>
            </div>

            <div className="flex flex-col gap-5 text-lg md:text-xl lg:text-lg md:-px-10" data-aos="fade-up">
                <p>Olá, eu sou o professor Janilton Almeida! Com uma sólida formação acadêmica e mais de duas décadas de experiência no ensino, estou comprometido com a promoção da educação e o desenvolvimento integral dos estudantes. Minha trajetória acadêmica abrange diversas áreas do conhecimento.
                </p>
                <p >Sou graduado em Geografia, Ciências Biológicas e Pedagogia, o que me permite uma perspectiva multidisciplinar e interdisciplinar que enriquece minha prática pedagógica.</p>
                <p >Além disso, obtive especializações em Mídias na Educação, Formação Socioeconômica do Brasil e Gestão Ambiental e Desenvolvimento Sustentável. Atualmente, estou avançando em minha jornada acadêmica como Doutorando em Ciências, com um mestrado em Ensino de Ciências.</p>
                <p >Há mais de 25 anos, atuo como professor de Geografia e em coordenações de ensino e formação de professores. E atualmente estou na coordenação do Núcleo de Apoio Pedagógico da Secretaria de Educação do Município de Ibiassucê, Bahia.</p>
                <p>Seja bem-vindo ao meu mundo de conhecimento, aprendizado e descobertas. Estou ansioso para compartilhar essa jornada educacional com você. Vamos nessa! <Link href='/about' className='hover:underline cursor-pointer text-blue-600' aria-label="Leia mais sobre Janilton Almeida"> Mais sobre.</Link></p>
            </div>
        </div>
    </section>
  )
}
