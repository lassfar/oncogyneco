
import SectionLayout from './../../layout/section/SectionLayout'
import NewsCard from './NewsCard';

const NewsSection = () => {
  return (
    <SectionLayout title="Actualités">
      <div className="flex flex-wrap w-full">
        <NewsCard item={{title: 'Article', desc: 'lorem ipsum dolor faux text lorem ipsum dolor faux text lorem ipsum dolor faux text'}} />
        <NewsCard item={{title: 'Article', desc: 'lorem ipsum dolor faux text lorem ipsum dolor faux text lorem ipsum dolor faux text'}} />
        <NewsCard item={{title: 'Article', desc: 'lorem ipsum dolor faux text lorem ipsum dolor faux text lorem ipsum dolor faux text'}} />
        <NewsCard item={{title: 'Article', desc: 'lorem ipsum dolor faux text lorem ipsum dolor faux text lorem ipsum dolor faux text'}} />
      </div>
    </SectionLayout>
  )
}

export default NewsSection
