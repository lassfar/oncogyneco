
import { useState } from 'react';
import SectionLayout from './../../layout/section/SectionLayout';
import { partnerList } from './../../data/index';

const PartnerSection = () => {
  const [partners] = useState(partnerList)
  return (
    <SectionLayout title="Nos Partenaires">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 lg:gap-6 w-full">
        {partners.map((item, idx) => 
          <div
            key={idx}
            className="relative z-10 h-36 rounded-3xl bg-white shadow-md border-b-8 border-secondary-dark border-opacity-50 lg:mb-6"
          >
            <img src={item.imgUrl} className="absolute z-20 object-contain top-0 left-0 w-full h-full rounded-xl py-2" alt={item.desc && item.desc.substring(0, 20)} />
          </div>
        )}
      </div>
    </SectionLayout>
  )
}

export default PartnerSection
