
import Title from './../../UI/article/Title';
import Paragraph from './../../UI/article/Paragraph';
import SpecialityImage from './SpecialityImage';
import Subtitle from './../../UI/article/Subtitle';
import Link from 'next/link';


const SpecialityDetails = () => {
  return (
    <section className="flex flex-row flex-wrap xl:p-14 lg:p-14 md:p-10 sm:p-8 p-8">

      <article className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
        <Title>Chirurgie Gynécologique</Title>
        <Paragraph>
          la chirurgie gynécologique et mammaire s’intéresse aux organes génitaux de la
          femme : vulve, vagin, utérus et ses annexes (ovaires et trompes) et seins.
        </Paragraph>
        <Paragraph>
          Elle consiste à pratiquer des interventions dans le cadre de la prise en charge de
          plusieurs affections, essentiellement dans la pathologie oncogynécologique et mammaire.
        </Paragraph>
        <Paragraph>
          Le service d’onco-gynécologie pour détection précoce des cancers et traitement
          chirurgicale des cancers gynéco-mammaire assures plusieurs activités :
        </Paragraph>

        <Subtitle addClass="font-semibold" margins="mb-2">
          Consultation onco-gynécologie :
        </Subtitle>
        <ul className="ml-4 mb-6">
          <li>- Dépistage du cancer du sein et du col</li>
          <li>- Consultation colposcopique (mardi-jeudi)</li>
          <li>- Consultation orthogénie (mercredi)</li>
          <li>- Consultation d’oncofértilité</li>
          <li>- Consultation onco-gynécologie</li>
          <li>- Consultation de soutien psychologique (vendredi)</li>
        </ul>


        <Subtitle addClass="font-semibold" margins="mb-2">
          Types d'interventions chirurgicales :
        </Subtitle>
        <p className="font-bold text-secondary mb-2">
          Chirurgie du sein
        </p>
        
        <ul className="ml-4 mb-6">
          <li>• Traitement conservateur/oncoplastie.</li>
          <li>
            • Mastectomie avec reconstruction mammaire immédiate ou différée par
            prothése/lambeau cutanéo-musculaire.
          </li>
        </ul>
        <p className="font-bold text-secondary mb-2">
          Chirurgie gynécologique conventionnelle et laparoscopie :
        </p>
        <ul className="ml-4 mb-6">
          <li className="text-primary underline">
            <Link href={"/cares/col"}>
              <a>
                {"• Cancer du col"}
              </a>
            </Link>
          </li>
          <li className="text-primary underline">
            <Link href={"/cares/ovaire"}>
              <a>
                {"• Cancer de l’ovaire"}
              </a>
            </Link>
          </li>
          <li className="text-primary underline">
            <Link href={"/cares/endometre"}>
              <a>
                {"• Cancer de l’endomètre"}
              </a>
            </Link>
          </li>
          <li className="text-primary underline">
            <Link href={"/cares/vulve"}>
              <a>
                {"• Cancer de la vulve"}
              </a>
            </Link>
          </li>
        </ul>
        <p className="font-bold mb-6">
          Chirurgie gynécologique bénigne.
        </p>

        <Subtitle>À savoir :</Subtitle>
        <Paragraph addClass={"font-bold"}>
          le choix du traitement est discuté lors d’une réunion de concertation
          pluridisciplinaire (RCP) rassemblant des médecins de spécialités
          différentes: chirurgien gynécologique, oncologue, radiothérapeute,
          radiologue, anatomopathologiste….
        </Paragraph>
        <Paragraph addClass={"font-bold"}>
          Ensemble, ils établissent une proposition de traitements , qui est ensuite expliquée et discutée avec la patiente .
        </Paragraph>
      </article>

      <div className="xl:w-1/12 lg:w-1/12 md:w-1/12 xl:flex lg:flex md:flex hidden"></div>

      <SpecialityImage imageSrc="/images/common/7.jpg" />

      {/* ########################################## */}
      <div className="w-full my-8 flex items-center justify-center">
        <hr className="h-1 w-2/12 bg-fourth xl:hidden lg:hidden md:hidden" />
      </div>
      {/* ########################################## */}


    </section>
  )
}

export default SpecialityDetails
