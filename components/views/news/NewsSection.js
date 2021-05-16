
import SectionLayout from './../../layout/section/SectionLayout';
import Button from './../../UI/Button';
import * as bsIcon from 'react-icons/bs'
import Image from 'next/image';

const NewsSection = () => {
  return (
    <SectionLayout title="Actualités">
      <div className="flex w-full">
        <div className="flex flex-col w-3/12 shadow">
          <div className="h-48 w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('/images/common/4.jpg')`}}>
          </div>
          <div className="w-full flex-col p-6">
            <h3 className="text-2xl font-bold text-secondary uppercase mb-4">
              Article
            </h3>
            <article>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </article>
            <Button
              btnSize="small"
              title="Voir l'article"
              bgColor="bg-black"
              textColor="text-white"
              ringColor="ring-black"
              iconName={bsIcon.BsFileText}
              addClass="ml-auto mt-4"
            />
          </div>
        </div>

      </div>
    </SectionLayout>
  )
}

export default NewsSection
