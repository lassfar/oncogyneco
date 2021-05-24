import { useState } from "react"
import Link from "next/link";
import { footerLinkList } from './../../data/index';
import DynamicIcon from './../../UI/DynamicIcon';
import GoogleMapIframe from './../../map/GoogleMapIframe';

export default function AppFooter() {
  
  const [footerLinks] = useState(footerLinkList)
  
  return (
    <footer className="relative bg-primary text-white xl:px-12 lg:px-10 md:px-10 px-8 py-16">
      
      <h1 className="text-2xl font-semibold border-l-4 border-white pl-4 mb-4">Centre Mohammed VI de traitement du cancer</h1>

      <div className="flex flex-wrap">
        <div className="flex xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
          {footerLinks.map((item, idx) => (
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full my-8" key={idx}>
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

        <div className="xl:w-1/12 lg:w-1/12 md:w-1/12 xl:flex lg:flex md:flex hidden">

        </div>

        <div className="flex flex-col xl:w-5/12 lg:w-5/12 md:w-5/12 w-full h-42">
          <h2 className="text-xl font-medium mb-4">Notre Localisation</h2>
          <GoogleMapIframe addClass="w-full h-full border-4 border-secondary rounded-3xl" />
        </div>
        
      </div>
            
    </footer>
  )
}

