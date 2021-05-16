import { useState } from 'react'
import Link from 'next/link'
import SectionLayout from '../../layout/section/SectionLayout'
import Button from '../../UI/Button'
import SpecialityCard from './SpecialityCard'
import { specialityList } from '../../data/index'

const SpecialitySection = () => {

  const [specialities] = useState(specialityList);

  return (
    <SectionLayout title="Nos Specialités">
      <div className="flex flex-wrap w-full">
        {specialities.map((item, idx) => <SpecialityCard item={item} key={idx} /> )}
      </div>
    </SectionLayout>
  )
}

export default SpecialitySection
