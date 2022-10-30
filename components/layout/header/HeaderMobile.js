import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from "next/link"
import IconBtn from './../../UI/IconBtn';
import * as cgIcon from 'react-icons/cg'



const HeaderMobile = () => {
  const router = useRouter()
  const [pathName, setPathName] = useState("")

  useEffect(() => {
    setPathName(router.pathname)
  }, [router])

  const [links] = useState([
    { link: '/', text: 'Accueil' },
    { link: '/presentation', text: 'Qui somme-nous' },
    { link: '/speciality', text: 'Notre Spécialité' },
    { link: '/news', text: 'Actualités' },
    { link: '/contact', text: 'Contact' },
  ]);

  const closeMenu = () => {
    let menu = document.getElementById('mobileMenu');
    // menu.classList.add('hidden');
    menu.classList.remove('animate-slide-in-menu')
    menu.classList.add('animate-slide-out-menu')
    setTimeout(() => {
      menu.classList.add('hidden')
    }, 500);
  }

  return (
    <header className="fixed top-0 right-0 xl:w-4/12 lg:w-4/12 w-full h-screen hidden animate-slide-out-menu border-b-8 border-t-8 border-secondary" id="mobileMenu">
      <div className="relative flex flex-col items-center justify-around h-full bg-primary text-white">
        
        <div role="menu" className="flex flex-col items-center">
          {links.map((item, idx) => (
            <Link role="menuitem" href={item.link} key={idx} className={`md:text-2xl text-xl border-b-4 my-4 ${pathName === item.link ? 'border-fourth text-fourth' : 'border-transparent'}`}>
              {item.text}
            </Link>
          ))}
        </div>

        <a href="#" role="none" onClick={closeMenu} className="">
          <IconBtn iconName={cgIcon.CgClose} btnColor="white" ariaLabel="Fermer le menu" iconColor="secondary" addClass="ring-4 ring-white focus:ring-white ring-opacity-50" />
        </a>
        
      </div>
    </header>
  )
}

export default HeaderMobile
