import { useState } from "react"
import Link from "next/link";
import { footerLinkList } from './../../data/index';
import GoogleMapIframe from './../../map/GoogleMapIframe';
import FooterLinkGroup from './FooterLinkGroup';

export default function AppFooter() {
  
  const [footerLinks] = useState(footerLinkList)
  
  return (
    <footer className="relative bg-primary text-white xl:px-12 lg:px-10 md:px-10 px-8 py-16">
      
      <h1 className="text-2xl font-semibold border-l-4 border-white pl-4 mb-4">Centre Mohammed VI de traitement du cancer</h1>

      <div className="flex flex-wrap">
        <div className="flex flex-wrap xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
          {footerLinks.map((item, idx) => <FooterLinkGroup key={idx} item={item} /> )}
        </div>

        <div className="xl:w-1/12 lg:w-1/12 md:w-1/12 xl:flex lg:flex md:flex hidden">
          {/* SPACE */}
        </div>

        <div className="flex flex-col xl:w-5/12 lg:w-5/12 md:w-5/12 w-full h-42">
          <h2 className="text-xl font-medium mb-4">Notre Localisation</h2>
          <GoogleMapIframe addClass="w-full h-full border-4 border-secondary rounded-3xl" />
        </div>
        
      </div>
            
    </footer>
  )
}

