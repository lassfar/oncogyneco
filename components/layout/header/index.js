import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const AppHeader = () => {
  const router = useRouter()
  const [pathName, setPathName] = useState("")

  useEffect(() => {
    setPathName(router.pathname)
  }, [router])

  const [links] = useState([
    { link: '/', text: 'Accueil' },
    { link: '/who-we-are', text: 'Qui somme-nous' },
    { link: '/our-specialities', text: 'Nos Spécialités' },
    { link: '/news', text: 'Actualités' },
    // { link: '/contacts', text: 'Contact' },
  ]);

  return (
    <nav className="flex items-center flex-wrap justify-end bg-primary shadow-sm border-b-2">
      <div className="xl:absolute lg:absolute md:flex md:justify-center top-0 left-6 z-50 bg-white border-b-4 border-fourth">
        <Image src="/images/logo.svg" className="object-contain bg-transparent" width="auto" height="180" alt="OncoGyneco CHU CASA LOGO" />
      </div>

      <div className="flex items-center justify-center px-6">
        {links.map((item, idx) => (
          <div className="px-6 py-6" key={idx}>
            <Link href={item.link} key={idx}>
              <a className={`uppercase border-b-4 text-white hover:border-fourth hover:text-fourth-dark ${pathName === item.link ? 'border-fourth text-fourth' : 'border-transparent'} transition delay-100 rounded px-4 py-6`}>
                <small>{item.text}</small>
              </a>
            </Link>
          </div>
        ))}
        <button className="bg-secondary text-white transition delay-100 focus:ring-2 focus:ring-secondary focus:ring-opacity-50 rounded px-4 py-2" >
          Contact
        </button>
      </div>

    </nav>
  )
}

export default AppHeader
