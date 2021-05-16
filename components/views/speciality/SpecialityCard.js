
import * as cgIcon from 'react-icons/cg'
import Button from './../../UI/Button';

const SpecialityCard = ({ item }) => {
  return (
    <div
      className="xl:w-6/12 lg:w-6/12 md:xl:w-6/12 h-96 sm:w-full w-full bg-cover bg-no-repeat"
      style={{backgroundImage: `url('${item.imgUrl}')`}}
    >
      <div className="flex flex-col w-full h-full justify-end text-white bg-black bg-opacity-40 hover:bg-opacity-20 transition-all delay-100 ease-in-out p-6">
        <h3 className="text-2xl font-bold uppercase mb-6">
          {item.title}
        </h3>
        <p className="mb-6">{item.desc}</p>
        <Button
          title="Lire plus"
          bgColor="bg-secondary"
          textColor="text-white"
          ringColor="ring-secondary-light"
          iconName={cgIcon.CgMore}
          addClass="ml-auto"
        />
      </div>
    </div>
  )
}

export default SpecialityCard
