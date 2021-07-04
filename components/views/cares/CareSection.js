import { useState } from 'react'
import SectionLayout from './../../layout/section/SectionLayout'
import { careTypeList } from '../../data'
import CareCard from './CareCard'
import Carousel from './../../layout/carousel/index';
import IconBtn from '../../UI/IconBtn';
import * as cgIcon from 'react-icons/cg'

const CareSection = () => {
  
  const [careTypes] = useState(careTypeList);

  return (
    <SectionLayout subtitle="OFFRE DE SOINS DIVÉRSIFIÉ ET ACCOMPAGNEMENT COMPLET">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-3">
        {careTypes.map((item, idx) => <CareCard item={item} key={idx} /> )}
      </div>
      
      {/* <IconBtn
        iconName={cgIcon.CgChevronLeft}
        btnColor="primary"
        iconColor="white"
        ringColor="primary-light"
        addClass="absolute left-2 top-1/2"
      /> */}
      {/* <Carousel carouselId="careCarousel" cardId={careTypes[0].id} carouselId="careCarousel" cardsCount={careTypes.length} delayInterval={3000}> */}
        {/* {careTypes.map((item, idx) => <CareCard item={item} key={idx} /> )} */}
      {/* </Carousel> */}
      {/* <IconBtn
        iconName={cgIcon.CgChevronRight}
        btnColor="primary"
        iconColor="white"
        ringColor="primary-light"
        addClass="absolute right-2 top-1/2"
      /> */}

    </SectionLayout>
  )
}

export default CareSection
