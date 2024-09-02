'use client'
import AOS from 'aos';
import { useEffect } from 'react';
import useMedia from 'use-media';

export default function Banner() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        })
      }, []);
      const isMobile = useMedia({ maxWidth: '800px' });

  return ( 
    <section className='w-full max-w-[90rem] h-[600px] overflow-hidden bg-white text-black flex flex-col-reverse md:flex-row justify-between items-center gap-3 px-7 sm:px-12 xl:px-24'>
            
        <div className="w-full md:w-3/5 h-full flex flex-col justify-center items-center px-5 lg:mr-5 gap-4" data-aos="fade-right">
            <div className="w-full flex flex-col items-start justify-center">
                <h1 className='text-2xl lg:text-6xl'>
                    <p>Professor</p>  
                    <p><strong>Janilton Almeida</strong></p>  
                </h1>
            </div>
            <p className='lg:text-[1.2rem]'>Domine a arte de dar aulas com um especialista em aprendizagem criativa, inovação e iniciação cinetífica na escola.</p>
        </div>
            
        <div className="w-2/5 h-full flex justify-center items-center">
            <div className="w-2/5 h-full relative flex flex-col justify-center items-center lg:items-end" data-aos="fade-left">
                <div className="w-[200px] h-[250px] lg:w-[300px] lg:h-[350px] bg-main-blue absolute top-[3rem] -right-10 md:top-40 md:right-0 lg:top-28 lg:-right-2 rounded-md"></div>
                <div className={`w-[190px] h-[245px] lg:w-[270px] lg:h-[350px] ${isMobile ? 'bg-hero-image' : 'bg-hero-image'} bg-no-repeat bg-contain absolute top-[6rem] -left-8 md:top-48 md:-left-5 lg:top-40 lg:right-0 rounded-md rounded-t-md `} ></div>
            </div>
        </div>
        
    </section>
  )
}
