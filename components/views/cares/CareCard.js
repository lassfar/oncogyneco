
import RouteLink from './../../UI/RouteLink'
import * as cgIcon from 'react-icons/cg'


const CareCard = ({ item }) => {
  return (
    <div
      className="flex flex-col items-center text-center justify-start w-full bg-white rounded-3xl shadow-lg border-b-8 border-opacity-50 border-secondary-dark p-6 mb-4"
      id={item.id}
    >
      {/* CARD HEADER */}
      <div className="w-full flex justify-center items-center py-2 mb-4">
        <div className="w-24 h-24 rounded-full border-2 border-primary-light">
          <img
            src={item.imgUrl}
            alt={item.title}
            className="inline-flex object-contain p-3 m-0"
            width="100%" height="100%"
          />
        </div>
      </div>

      {/* CARD CONTENT */}
      <h3 className="text-2xl font-bold text-primary uppercase mb-4">
        {item.title}
      </h3>
      <p className="mb-6">
        {item.desc.substring(0, 50).concat('...')}
      </p>
      <RouteLink
        link={item.link}
        btnSize="small"
        title="Voir détails"
        bgColor="bg-secondary"
        textColor="text-white"
        ringColor="ring-secondary-light"
        iconName={cgIcon.CgMore}
        addClass="mt-auto"
      />

    </div>
  )
}

export default CareCard
