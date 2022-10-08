const NavLinkHeader=({text})=>{
    return(
        <a href="#" className="relative py-8">
        <span className="peer">{text}</span>    
         <span className=" absolute bottom-0 w-full block scale-x-0 transition-all duration-400 peer-hover:scale-x-100 peer-hover:bg-orange-primary h-1 "></span>   
        </a>

    )
}

export default NavLinkHeader