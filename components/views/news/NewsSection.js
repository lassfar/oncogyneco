import { useState } from 'react'
import { newsList } from '../../data';
import SectionLayout from './../../layout/section/SectionLayout'
import NewsCard from './NewsCard';

const NewsSection = () => {
  const [blogList] = useState(newsList)

  return (
    <SectionLayout title="Actualités">
      <div className="flex flex-wrap w-full" role="list">
        
        {blogList.map((item, idx) => <NewsCard item={item} key={idx} /> )}
      </div>
    </SectionLayout>
  )
}

export default NewsSection
