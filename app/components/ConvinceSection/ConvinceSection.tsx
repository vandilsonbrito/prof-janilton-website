'use client'
import { MdVerified } from 'react-icons/md';
import { FaBrain, FaLightbulb } from 'react-icons/fa';
import { BiSolidTimeFive } from 'react-icons/bi';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { BsFillClipboard2CheckFill } from 'react-icons/bs';
import AOS from 'aos';
import { useEffect } from 'react';


export default function ConvinceSection() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        })
      }, []) 

  return (
    <section className='w-full h-full bg-main-blue py-10 px-14 pb-20 lg:pb-24 flex flex-col items-center font-Montserrat'>
        <div className="w-full flex justify-center mt-10" data-aos="fade-up">
            <h2 className="text-white text-3xl lg:text-4xl uppercase font-semibold text-center">Por que me acompanhar?</h2>
        </div>
        <div className="w-full flex flex-wrap gap-8 mt-20 justify-center">
            <div data-aos="fade-up">
                <div className="w-[350px] h-[280px] bg-blue-800 rounded-3xl flex flex-col justify-center">
                    <div className="w-full h-full flex flex-col items-center gap-3 p-10">
                        <div className="w-full flex flex-col items-center gap-2">
                            <MdVerified className='text-6xl text-white'/>
                            <h3 className='text-[1.7rem] font-semibold text-white uppercase'>Excelência</h3>
                        </div>
                        <p className='text-base font-normal text-white text-center mt-5'>Tenha acesso a uma ampla variedade de recursos educacionais de alta qualidade.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up">
                <div className="w-[350px] h-[280px] bg-blue-800 rounded-3xl">
                    <div className="w-full h-full flex flex-col items-center gap-3 p-10">
                        <div className="w-full flex flex-col items-center gap-2">
                            <FaBrain className='text-6xl text-white'/>
                            <h3 className='text-[1.7rem] font-semibold text-white uppercase'>Aprimoramento</h3>
                        </div>
                        <p className='text-base font-normal text-white text-center mt-5'>Investa em seu crescimento profissional com meus cursos exclusivos.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up">
                <div className="w-[350px] h-[280px] bg-blue-800 rounded-3xl">
                    <div className="w-full h-full flex flex-col items-center gap-3 p-10">
                        <div className="w-full flex flex-col items-center gap-2">
                            <div className='w-full flex justify-center relative'>
                                <BiSolidTimeFive className='text-6xl text-white absolute left-[85px]'/>
                                <MdOutlineAttachMoney className='text-6xl text-white ml-10'/>
                            </div>
                            <h3 className='text-[1.7rem] font-semibold text-white uppercase'>Economia</h3>
                        </div>
                        <p className='text-base font-normal text-white text-center mt-5'>Economize tempo valioso com meus materiais educacionais prontos para uso.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up">
                <div className="w-[350px] h-[280px] bg-blue-800 rounded-3xl">
                    <div className="w-full h-full flex flex-col items-center gap-3 p-10">
                        <div className="w-full flex flex-col items-center gap-2">
                            <BsFillClipboard2CheckFill className='text-6xl text-white'/>
                            <h3 className='text-[1.7rem] font-semibold text-white uppercase'>Resultados</h3>
                        </div>
                        <p className='text-base font-normal text-white text-center mt-5'>Conte com materiais validados e aprovados por educadores de todo o país.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up">
                <div className="w-[350px] h-[280px] bg-blue-800 rounded-3xl">
                    <div className="w-full h-full flex flex-col items-center gap-3 p-10">
                        <div className="w-full flex flex-col items-center gap-2">
                            <FaLightbulb className='text-6xl text-white'/>
                            <h3 className='text-[1.7rem] font-semibold text-white uppercase'>Inspiração</h3>
                        </div>
                        <p className='text-base font-normal text-white text-center mt-5'>Mantenha-se inspirado com meus artigos e vídeos educacionais.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
