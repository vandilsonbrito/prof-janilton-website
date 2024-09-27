'use client'
import Link from "next/link";  
import './style.css';

export default function HeaderOutter() {
    
    return (
      <header className="w-full h-[80px] sticky-header sticky top-0 z-50 ">
            <div className="w-full h-full  bg-blue-800 px-5 sm:px-10 xl:px-20 flex items-center justify-between font-Montserrat font-semibold ">
                <Link href='/' className="cursor-pointer">
                    <div className="w-[130px] sm:w-[170px]">
                        <h1 className="text-[1rem] md:text-[1.3rem] leading-7 text-center text-[#fff]">Prof. Janilton Almeida</h1>
                    </div>
                </Link>
        
                <nav className="w-[65%] items-center justify-end  text-sm lg:text-[1.1rem]  text-[#fff]  flex">
                    <Link href='/'className="cursor-pointer">
                        <span className="hover:text-blue-700 hover:bg-white px-4 py-3 rounded-3xl ease-in-out duration-500 text-[1rem] md:text-[1.2rem]">Home</span>   
                    </Link>
      
                </nav>
            </div>

      </header>
    )
  }