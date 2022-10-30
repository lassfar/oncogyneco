import {CgMore} from 'react-icons/cg'
import Image from "next/image"
import Link from "next/link"
import DynamicIcon from "../../UI/DynamicIcon";
import { EButtonVariant, EButtonSize } from "../../widgets/buttons/data";


const CareCard = ({ item }) => {
  return (
    <div
      className="flex flex-col items-center text-center justify-start w-full bg-white rounded-3xl shadow-lg border-b-8 border-opacity-50 border-secondary-dark p-6 mb-4"
      id={item.id}
      role="listitem"
      aria-label={`Cancer de: ${item.title}.`}
    >
      {/* CARD HEADER */}
      <div className="w-full flex justify-center items-center py-2 mb-4">
        <div className="w-24 h-24 rounded-full border-2 border-primary-light">
          <Image
            src={item.imgUrl}
            alt={item.title}
            className="inline-flex object-contain h-full w-full p-3 m-0"
            width="150" height="150"
            layout="fill"
          />
        </div>
      </div>

      {/* CARD CONTENT */}
      <h2 className="text-2xl font-bold text-primary uppercase mb-4" aria-describedby={item.title}>
        {item.title}
      </h2>
      <p className="mb-6" aria-describedby={item.desc}>
        {item.desc.substring(0, 50).concat('...')}
      </p>
      <Link
        href={item.link}
        className={`${EButtonSize.small} ${EButtonVariant.secondary} mt-auto`}
        aria-label={`Lire l'article.`}
      >
        <DynamicIcon iconName={CgMore} iconSize={"1rem"} iconClass="mr-1.5" />
        Voir details
      </Link>

    </div>
  )
}

export default CareCard
