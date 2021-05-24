
import { useState } from 'react';
import SectionLayout from './../../layout/section/SectionLayout';
import { partnerList } from './../../data/index';

const PartnerSection = () => {
  const [partners] = useState(partnerList)
  return (
    <SectionLayout title="Nos Partenaires">
      <div className="flex flex-wrap xl:justify-between lg:justify-between justify-center w-full">
        {partners.map((item, idx) => 
          <div
            key={idx}
            className="relative z-10 w-60 h-36 xl:flex-auto lg:flex-auto md:flex-grow-0 flex-grow-0 rounded-3xl bg-white shadow-md border-b-8 border-secondary-dark border-opacity-50 mb-6 mx-4"
          >
            <img src={item.imgUrl} className="absolute z-20 object-contain top-0 left-0 w-full h-full rounded-xl py-2" alt={item.desc} />
          </div>
        )}
      </div>
    </SectionLayout>
  )
}

export default PartnerSection
