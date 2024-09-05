import Link from "next/link";
import { ModeToggle } from "../ui/modalToggle";

export default function Navbar() {
  return (
    <nav className="w-[100dvw] h-full bg-slate-50 dark:bg-slate-700">
        <div className="relative flex items-center justify-between max-w-3xl mx-auto px-4 py-3 ">
          <Link href='/' className="cursor-pointer">
              <div className="w-[130px] sm:w-[170px]">
                  <p className="text-[1rem] md:text-[1.3rem] leading-7 text-center text-black dark:text-white font-semibold">Prof. Janilton Almeida</p>
              </div>
          </Link>
          <Link href='/artigos' className="cursor-pointer">
              <div className="w-[105px] p-1 border-2 rounded-md hover:shadow-sm ease-linear">
                  <p className="text-[1rem] md:text-[1.2rem] leading-7 text-center text-black dark:text-white font-semibold">Voltar</p>
              </div>
          </Link>
        </div>
    </nav>
  )
}
