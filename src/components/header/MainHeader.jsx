import LogoSneakers from "@/assets/images/logo.svg"
import Avatar from "@/assets/images/image-avatar.png"
import MenuIcon from "@/components/icons/MenuIcon"
import CartIcon from "@/components/icons/CartIcon"
import CloseIcon from "@/components/icons/CloseIcon"
import { useState } from "react"

 const MainHeader = () => {

    const [navClass, setNavClass] = useState("hidden font-bold   md:flex md:gap-3 md:mr-auto md:flex-row md:static md:p-0")
    const handleOpenMenu=()=>{
        setNavClass("absolute font-bold w-3/4 bg-white top-0 left-0 h-full p-8 gap-y-5 flex flex-col md:flex md:gap-3 md:mr-auto md:flex-row md:static md:p-0")
    }

    const handleCloseMenu=()=>{
       setNavClass("hidden font-bold   md:flex md:gap-3 md:mr-auto md:flex-row md:static md:p-0")
    }
  return (
    <>
    <header className="flex container mx-auto items-center px-4 py-6 gap-8 bg-gray-200">
        <button className="md:hidden" onClick={handleOpenMenu}>
            <MenuIcon/>
        </button>
      <img src={LogoSneakers} alt="logo sneakers" className="mr-auto md:mr-0 mb-1" />
      <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
              <CloseIcon/>
          </button>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-4">
        <button>
            <CartIcon/>
        </button>
        <img src={Avatar} alt="" className="w-12" />
      </div>
    </header>
    </>
  )
}
export default MainHeader
