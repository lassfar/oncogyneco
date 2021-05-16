import { useState } from 'react'
import SectionLayout from './../../layout/section/SectionLayout'
import { careTypeList } from '../../data'
import CareCard from './CareCard'

const CareSection = () => {
  
  const [careTypes] = useState(careTypeList);

  return (
    <SectionLayout subtitle="OFFRE DE SOINS DIVÉRSIFIÉ ET ACCOMPAGNEMENT COMPLET">

      <div className="flex flex-row flex-wrap justify-between w-full">
        {careTypes.map((item, idx) => <CareCard item={item} key={idx} /> )}
      </div>

    </SectionLayout>
  )
}

export default CareSection
