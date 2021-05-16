import DynamicIcon from "../../UI/DynamicIcon"
import * as cgIcon from 'react-icons/cg'

const Jumbo = () => {
  return (
    <div className="relative w-100 h-4/6 bg-no-repeat bg-center bg-cover p-6" style={{backgroundImage: "url('/images/common/jumbo-cover.jpg')", height: '70vh'}}>
      <div className="flex min-w-full h-full bg-black bg-opacity-40 py-8">

        <div className="flex items-center w-full h-full text-white p-10">
          <div className="xl:w-8/12 lg:w-8/12 md:w-full sm:w-full">
            <h1 className="xl:text-5xl lg:text-4xl text-3xl mb-10">Centre Mohammed VI de traitement du cancer</h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Le service onco-gynécologie du Centre Mohamed IV pour le traitement du cancer du CHU ibn rochd
              offre une prise en charge globale médicale et chirurgicale de la plupart des pathologies gynécologiques et mammaire.
            </p>
            <button className="flex items-center bg-secondary rounded focus:ring-2 ring-secondary-light px-6 py-2 mt-8">
              Lire plus
              <DynamicIcon iconName={cgIcon.CgMore} iconClass="ml-2" />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Jumbo
