
import { useState } from 'react';
import SectionLayout from './../../layout/section/SectionLayout';
import { partnerList } from './../../data/index';
import Image from 'next/image';

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
            <Image src={item.imgUrl} className="absolute z-20 object-contain top-0 left-0 w-full h-full rounded-xl py-2" width={250} height={200} alt={item.alt} />
          </div>
        )}
      </div>
    </SectionLayout>
  )
}

export default PartnerSection
