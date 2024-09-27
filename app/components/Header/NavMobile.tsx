'use client'
import Overlay from './Overlay';
import { FaWindowClose } from 'react-icons/fa';
import Link from 'next/link';
import { Link as ScrollLink } from "react-scroll";  
import { useEffect } from 'react';
import { useGlobal } from '../GlobalProviderMenuIsOpen/MenuIsOpen';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function NavMobile({ className }: {className: string}) {

    const headerHeight = 120;

    const { isMenuOpen, setIsMenuOpen } = useGlobal();

    const fadeInOut = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const toggleBurgerMenu = () => {
      document?.querySelector('.burger-menu')?.classList.toggle('flex');
      document?.querySelector('.burger-menu')?.classList.toggle('hidden');
      document?.querySelector('.overlay')?.classList.toggle('flex');
      document?.querySelector('.overlay')?.classList.toggle('hidden');

      setIsMenuOpen(!isMenuOpen);

    }

    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [isMenuOpen]);

    const handleMenuItemClick = () => {
      toggleBurgerMenu(); 
     
    }

    return (
      <>
          <Overlay className="overlay w-full h-screen absolute top-0 left-0 bg-[#00000063] z-40 hidden" />
          <div className={`${className}`}>
              <button className="w-full flex justify-end -ml-2 sm:-ml-7">
                  <FaWindowClose className='close-menu text-white text-3xl z-[80]' onClick={() => handleMenuItemClick()}/>
              </button>
              <motion.div 
                initial="hidden"
                animate={isMenuOpen ? 'visible' : 'hidden'}
                variants={fadeInOut}
                transition={{ duration: 0.3 }}
                className='w-full h-[50%]'
                >
                <nav className="w-full h-[100%] flex flex-col justify-around items-center text-lg  text-[#fff] font-semibold uppercase mt-10">  
                    <ScrollLink to='/sobre' href='#sobre' offset={-headerHeight}>
                        <span className="hover:text-white"  onClick={handleMenuItemClick}>Sobre</span>
                    </ScrollLink>
                    <Link href='/artigos' >
                        <span className="hover:text-white"  onClick={handleMenuItemClick}>Artigos</span>
                    </Link>
                    <ScrollLink to='/canal' href='#canal' offset={-headerHeight}>
                        <span className="hover:text-white"  onClick={handleMenuItemClick}>Canal</span>
                    </ScrollLink>
                    <ScrollLink to='/contato' href='#contato' offset={-headerHeight}>
                        <span className="hover:text-white"  onClick={handleMenuItemClick}>Contato</span>
                    </ScrollLink>
                </nav>
              </motion.div>
          </div>
      </>
    )
}

NavMobile.propTypes = {
    className: PropTypes.string,
}
