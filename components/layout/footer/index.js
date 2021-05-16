import { useState } from "react"
import Link from "next/link";
import Image from 'next/image';
import { footerLinkList } from './../../data/index';
import DynamicIcon from './../../UI/DynamicIcon';

export default function AppFooter() {
  
  const [footerLinks] = useState(footerLinkList)
  
  return (
    <footer className="bg-primary text-white xl:p-12 lg:p-10 md:p-10 p-8">
      
      <h1 className="text-2xl font-semibold border-l-4 border-white pl-4 mb-4">Centre Mohammed VI de traitement du cancer</h1>

      <div className="flex flex-wrap">
        {footerLinks.map((item, idx) => (
          <div className="xl:w-3/12 lg:w-3/12 md:w-6/12 my-8" key={idx}>
            <h2 className="text-xl font-medium mb-4">{item.title}</h2>
            <div className="flex flex-col">
              {item.links.map((elem, idx2) => (
                <Link href={elem.to} key={idx2*.77}>
                  <a className="flex flex-nowrap my-1">
                    <DynamicIcon iconName={elem.icon} />
                    <span className="font-light flex-auto ml-2">{ elem.text }</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
            
    </footer>
  )
}

