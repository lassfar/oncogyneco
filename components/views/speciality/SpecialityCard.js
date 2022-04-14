
import Link from 'next/link';
import * as cgIcon from 'react-icons/cg'
import Button from './../../UI/Button';

const SpecialityCard = ({ item }) => {
  return (
    <div
      className="h-96 w-full bg-cover bg-no-repeat"
      style={{backgroundImage: `url('${item.imgUrl}')`, backgroundPosition: 'center 80%'}}
    >
      <div className="flex flex-col w-full h-full justify-end text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm hover:backdrop-blur-0 hover:bg-opacity-40 transition-all delay-100 ease-in-out p-6">
        <h3 className="text-2xl font-bold uppercase mb-6">
          {item.title}
        </h3>
        <p className="mb-6 lg:w-2/3 w-full">{item.desc}</p>
        <Link href="/speciality">
          <a>
            <Button
              title="Lire plus"
              bgColor="bg-secondary"
              textColor="text-white"
              ringColor="ring-secondary-light"
              iconName={cgIcon.CgMore}
              addClass="ml-auto"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SpecialityCard
