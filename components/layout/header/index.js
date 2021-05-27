import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as cgIcon from 'react-icons/cg'
import Button from './../../UI/Button';
import HeaderMobile from './HeaderMobile';

const AppHeader = () => {
  const router = useRouter()
  const [pathName, setPathName] = useState("")

  useEffect(() => {
    setPathName(router.pathname)
  }, [router])

  const [links] = useState([
    { link: '/', text: 'Accueil' },
    { link: '/presentation', text: 'Qui somme-nous' },
    { link: '/speciality', text: 'Nos Spécialités' },
    { link: '/news', text: 'Actualités' },
    // { link: '/contacts', text: 'Contact' },
  ]);
  

  const openMenu = () => {
    let menu = document.getElementById('mobileMenu')
    // menu.classList.remove('hidden');
    menu.classList.remove('hidden')
    menu.classList.remove('animate-slide-out-menu')
    menu.classList.add('animate-slide-in-menu')
  }

  return (
    <nav className="relative flex items-center flex-wrap xl:justify-end lg:justify-end bg-primary shadow-sm px-6">
      
      <div className="flex justify-between items-center xl:absolute lg:absolute xl:w-2/12 lg:w-2/12 w-full xl:top-0 lg:top-0 xl:left-6 lg:left-6 xl:pr-0 lg:pr-0 pr-6 z-50 bg-white border-b-4 border-fourth xl:shadow lg:shadow">
        <Image src="/images/logo.svg" className="object-contain bg-transparent inline-flex" width="auto" height="180" alt="OncoGyneco CHU CASA LOGO" />
        <div className="xl:hidden lg:hidden flex bottom-0 right-6">
          <a href="#" onClick={openMenu}>
            <Button iconName={cgIcon.CgMenu} ringColor="ring-secondary" addClass="bg-secondary text-white" />
          </a>
        </div>
        
        <HeaderMobile isHidden="" />
      </div>

      <div className="xl:flex lg:flex hidden items-center justify-center px-2">
        {links.map((item, idx) => (
          <div className="px-2 py-6" key={idx}>
            <Link href={item.link}>
              <a className={`uppercase border-b-4 text-white hover:text-fourth-dark ${pathName === item.link ? 'border-fourth text-fourth' : 'border-transparent'} transition delay-100 rounded px-4 py-6`}>
                {item.text}
              </a>
            </Link>
          </div>
        ))}
        <Link href="/contact">
          <a href="#">
            <Button
              title="Contact"
              bgColor="bg-secondary"
              textColor="text-white"
              ringColor="ring-secondary-light"
              iconName={cgIcon.CgPhone}
              addClass={pathName === '/contact' && 'border-2 border-fourth'}
            />
          </a>
        </Link>

      </div>

    </nav>
  )
}

export default AppHeader
