'use client'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";  
import { RxHamburgerMenu } from 'react-icons/rx';
import NavMobile from './NavMobile';
import { useEffect } from "react";
import { useGlobal } from '../GlobalProviderMenuIsOpen/MenuIsOpen';
import Overlay from './Overlay';
import Link from "next/link";
import './style.css';

export default function Header() {
    
    const headerHeight = 88;
    const scrollToTop = () => {
        scroll.scrollToTop();
    };


    const { isMenuOpen, setIsMenuOpen } = useGlobal();

    const toggleBurgerMenu = () => {
        document.querySelector('.burger-menu')?.classList.toggle('flex');
        document.querySelector('.burger-menu')?.classList.toggle('hidden');
        document.querySelector('.overlay')?.classList.toggle('flex');
        document.querySelector('.overlay')?.classList.toggle('hidden');

        setIsMenuOpen(!isMenuOpen);    
    }
  
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);
  
    return (
        <header className="w-full h-[80px] sticky-header sticky top-0 z-50 text-border shadow-lg">
            <div className="w-full h-full  bg-blue-800 px-5 sm:px-10 xl:px-20 flex items-center justify-between font-Montserrat font-semibold ">
                <ScrollLink to='/home' href='#home' onClick={() => scrollToTop()} className="cursor-pointer">
                    <div className="w-[130px] sm:w-[170px]">
                        <p className="text-[1rem] sm:text-[1.2rem] leading-7 text-center text-white ">Prof. Janilton Almeida</p>
                    </div>
                </ScrollLink>
                <div className="mr-1 cursor-pointer">
                    <div className="lg:hidden w-full">
                        <RxHamburgerMenu className="menu-burger text-white text-3xl z-50" onClick={() => toggleBurgerMenu()}/>
                        <NavMobile className="burger-menu  w-[70%] h-screen bg-blue-900 absolute top-0 right-0 z-[80] px-4 pt-7 flex-col transition ease-in-out duration-700 hidden"/>
                        <Overlay className="overlay w-full h-screen absolute top-0 left-0 bg-[#00000070] z-40 hidden"/>
                    </div>
                </div>
                <nav className="w-[55%] items-center justify-between text-sm lg:text-[1.1rem]  text-white hidden lg:flex">
                    <ScrollLink to='/sobre' href='#Sobre' smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer">
                        <span className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Sobre</span>
                    </ScrollLink>
                    <Link href='/artigos'  className="cursor-pointer">
                        <span className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Artigos</span>
                    </Link>
                    <ScrollLink to='/canal' href='#Canal' smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer">
                        <span className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Canal</span>
                    </ScrollLink>
                    <ScrollLink to='/contato' href='#Contato' smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer">
                        <span className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500">Contato</span>
                    </ScrollLink>
                </nav>
            </div>
        </header>
    )
  }