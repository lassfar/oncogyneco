import { useState } from 'react';
import Link from "next/link"
import IconBtn from './../../UI/IconBtn';
import * as cgIcon from 'react-icons/cg'



const HeaderMobile = () => {
  const [links] = useState([
    { link: '/', text: 'Accueil' },
    { link: '/presentation', text: 'Qui somme-nous' },
    { link: '/speciality', text: 'Nos Spécialités' },
    { link: '/news', text: 'Actualités' },
    // { link: '/contacts', text: 'Contact' },
  ]);

  const closeMenu = () => {
    let menu = document.getElementById('mobileMenu');
    menu.classList.add('hidden');
  }

  return (
    <div className="absolute top-0 right-0 xl:w-4/12 lg:w-4/12 w-full h-screen hidden" id="mobileMenu">
      <div className="relative flex flex-col items-center justify-center bg-primary text-white">
        
        {links.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <a className="my-4">
              {item.text}
            </a>
          </Link>
        ))}

        <a href="#" onClick={closeMenu}>
          <IconBtn iconName={cgIcon.CgClose} btnColor="white" iconColor="secondary" />
        </a>
        
      </div>
    </div>
  )
}

export default HeaderMobile
