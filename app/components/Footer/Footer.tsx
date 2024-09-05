
import Social from '../Social/Social';

export default function Footer() {
  return (
    <footer className="w-full h-full bg-main-blue pt-10 flex flex-col justify-center items-center gap-6 lg:gap-10">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:gap-10 font-Montserrat">
            <h3 className="text-lg md:text-3xl font-semibold text-white lg:mt-2">Me siga nas redes socias.</h3>
            <Social/>
        </div>
        <div className="w-full bg-blue-700 pb-2 pt-1 flex justify-center text-center px-3 text-sm lg:text-base">
          <p className='text-white'>Todos os direitos reservados ao Professor Janilton. Desenvolvido por <a className='underline' target='_blank' href="https://www.instagram.com/vanprogramadorweb/">Vandilson Brito</a></p>
        </div>
    </footer>
  )
}
