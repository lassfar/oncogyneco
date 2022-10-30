import { useState } from 'react'
import SectionLayout from './../../layout/section/SectionLayout'
import { careTypeList } from '../../data'
import CareCard from './CareCard'

const CareSection = () => {
  
  const [careTypes] = useState(careTypeList);

  return (
    <SectionLayout subtitle="OFFRE DE SOINS DIVÉRSIFIÉ ET ACCOMPAGNEMENT COMPLET">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-3" role="list" aria-label="Les types de cancers">
        {careTypes.map((item, idx) => <CareCard item={item} key={idx} /> )}
      </div>
    </SectionLayout>
  )
}

export default CareSection
