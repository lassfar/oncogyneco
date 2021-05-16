
import { useState } from 'react';
import SectionLayout from './../../layout/section/SectionLayout';
import { partnerList } from './../../data/index';

const PartnerSection = () => {
  const [partners] = useState(partnerList)
  return (
    <SectionLayout title="Nos Partenaires">
      <div className="flex flex-wrap xl:justify-between lg:justify-between justify-center w-full">
        {partners.map((item, idx) => 
          <div key={idx}
            className="relative w-60 h-36 xl:flex-auto lg:flex-auto md:flex-grow-0 flex-grow-0 rounded-3xl bg-contain bg-center bg-no-repeat shadow-md mb-6 mx-4"
            style={{backgroundImage: `url('${item.imgUrl}')`}}
          >
          </div>
        )}
      </div>
    </SectionLayout>
  )
}

export default PartnerSection
