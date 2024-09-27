 
import { GrYoutube, GrInstagram } from 'react-icons/gr'; 

export default function Social() {
  return (
    <ul className="w-fit mt-4 flex justify-center items-center gap-5">
        <li className='w-12 h-12 flex justify-center items-center p-2 md:p-3 text-xl md:text-2xl text-blue-700 bg-white hover:bg-[#e44ca0] hover:text-white rounded-full cursor-pointer ease-in-out'>
          <a 
            href="https://www.instagram.com/geojanpro/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex justify-center items-center" 
            aria-label="Siga o Professor Janilton Almeida no Instagram">
            <GrInstagram />
          </a>
        </li>
        <li className="w-12 h-12 flex justify-center items-center p-2 md:p-3 text-xl md:text-2xl text-blue-700 bg-white hover:bg-red-500 hover:text-white rounded-full cursor-pointer ease-in-out">
          <a 
            href="https://www.youtube.com/@prof.janiltonalmeida8089" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex justify-center items-center"  
            aria-label="Inscreva-se no canal do Professor Janilton Almeida no YouTube">
            <GrYoutube />
          </a>
        </li>
    </ul>


  )
}