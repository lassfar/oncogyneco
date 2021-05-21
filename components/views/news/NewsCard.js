
import Button from './../../UI/Button'
import * as bsIcon from 'react-icons/bs'

const NewsCard = ({ item }) => {
  return (
    <div className="flex flex-col xl:w-64 lg:w-64 md:w-64 sm:w-56 w-full flex-auto justify-between rounded-b-md shadow-xl bg-gray-50 mx-4 mb-8">
      <div className="h-48 w-full bg-cover bg-center bg-no-repeat rounded-t-md" style={{backgroundImage: `url('/images/common/4.jpg')`}}>
      </div>
      <div className="w-full flex-col px-4 my-4">
        <h3 className="text-2xl font-bold text-primary uppercase mb-4">
          {item.title || '--'}
        </h3>
        <article className="mb-6">
          {item.desc ? item.desc.substring(0, 70).concat('...') : '--'}
        </article>
        <Button
          btnSize="small"
          title="Voir l'article"
          bgColor="bg-primary"
          textColor="text-white"
          ringColor="ring-primary"
          iconName={bsIcon.BsFileText}
          addClass="ml-auto mt-auto"
        />
      </div>
    </div>
  )
}

export default NewsCard
