import Link from "next/link"
import Socials from "./Socials"


const Header = () => {
  return (
    <header className="w-full flex-shrink-0 z-10 items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 pt-8">
        {/* logo */}
        <Link href="/" className="flex items-center gap-x-2 ">
          <span className='text-3xl font-black '>Daniil</span>
          <span className='text-3xl'>Speranskii</span>
        </Link>

        {/* socials */}
        <Socials />
      </div>
    </div>
  </header>
  )
}

export default Header