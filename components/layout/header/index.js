import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AppHeader = () => {
  const [links] = useState([
    { link: '/', text: 'Accueil' },
    { link: '/who-we-are', text: 'Qui somme-nous' },
    { link: '/our-specialities', text: 'Nos Spécialités' },
    { link: '/news', text: 'Actualités' },
    // { link: '/contacts', text: 'Contact' },
  ]);

  return (
    <nav className="flex items-center flex-wrap justify-between bg-white shadow-sm border-b-2">
      <div className="flex w-full justify-center">
        <Image src="/images/logo_transparent.png" className="object-contain bg-transparent" width="auto" height="130" alt="OncoGyneco CHU CASA LOGO" />
      </div>

      <div className="flex items-center w-full justify-center">
        {links.map((item, idx) => (
          <div className="px-6 py-4" key={idx}>
            <Link href={item.link} key={idx}>
              <a className="border-b-4 border-transparent hover:border-secondary transition delay-100 rounded px-4 py-4">
                {item.text}
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
