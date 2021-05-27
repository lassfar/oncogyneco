
import JumboLayout from './../../layout/jumbo/index';

const CareDetails = ({}) => {
  return (
    <div
      className="flex flex-col items-center flex-auto flex-shrink-0 text-center justify-start xl:w-52 lg:w-3/12 md:w-3/12 sm:w-6/12 w-full bg-white rounded-3xl shadow-lg border-b-8 border-opacity-50 border-secondary-dark p-6 mb-4 mx-2"
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
        {item.desc}
      </p>
      <Button
        btnSize="small"
        title="Lire plus"
        bgColor="bg-secondary"
        textColor="text-white"
        ringColor="ring-secondary-light"
        iconName={cgIcon.CgMore}
        addClass="mt-auto"
      />

    </div>
  )
}

export default CareDetails
