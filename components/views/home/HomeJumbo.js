import DynamicIcon from "../../UI/DynamicIcon"
import * as cgIcon from 'react-icons/cg'
import Button from '../../UI/Button';
import Link from "next/link";

const HomeJumbo = () => {
  return (
    <div className="relative w-100 h-4/6 bg-no-repeat bg-center bg-cover p-6" style={{backgroundImage: "url('/images/common/jumbo-cover.jpg')", height: '90vh'}}>
      <div className="flex min-w-full h-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm py-8">

        <div className="flex items-center w-full h-full text-white xl:p-16 lg:p-12 p-6">
          <div className="xl:w-4/14 lg:w-4/12 xl:inline-flex lg:inline-flex md:hidden sm:hidden">
            {/* space */}
          </div>

          <div className="xl:w-8/12 lg:w-8/12 md:w-full sm:w-full">
            <h1 className="mb-8 uppercase">
              <span className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-secondary font-bold">Centre</span><br />
              <span className="xl:text-7xl lg:text-7xl md:text-6xl text-4xl font-bold">Mohammed VI</span><br />
              <span className="xl:text-4xl lg:text-4xl md:text-3xl  text-3xl">pour le traitement des cancers</span>
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base mb-8">
              Le service onco-gynécologie du Centre Mohamed IV pour le traitement du cancer du CHU ibn rochd
              offre une prise en charge globale médicale et chirurgicale de la plupart des pathologies gynécologiques et mammaire.
            </p>
            <Link href="/presentation">
              <a>
                <Button
                  title="Lire plus"
                  bgColor="bg-secondary"
                  textColor="text-white"
                  ringColor="ring-secondary-light"
                  iconName={cgIcon.CgMore}
                />
              </a>
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeJumbo
