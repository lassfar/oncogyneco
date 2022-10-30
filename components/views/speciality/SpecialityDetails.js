
import Title from './../../UI/article/Title';
import Paragraph from './../../UI/article/Paragraph';
import SpecialityImage from './SpecialityImage';
import Subtitle from './../../UI/article/Subtitle';
import Link from 'next/link';
import SectionLayout from './../../layout/section/SectionLayout';


const SpecialityDetails = () => {
  return (
    <SectionLayout>

      <div className="grid grid-cols-7 gap-10 w-full">
        <article className="col-span-7 lg:col-span-4">
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
              <Link href={"/cares/cancers/uterus"}>
                {"• Cancer du col"}
              </Link>
            </li>
            <li className="text-primary underline">
              <Link href={"/cares/cancers/ovaire"}>
                {"• Cancer de l’ovaire"}
              </Link>
            </li>
            <li className="text-primary underline">
              <Link href={"/cares/cancers/endometre"}>
                {"• Cancer de l’endomètre"}
              </Link>
            </li>
            <li className="text-primary underline">
              <Link href={"/cares/cancers/vulve"}>
                {"• Cancer de la vulve"}
              </Link>
            </li>
          </ul>
          <p className="text-secondary font-bold mb-6">
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

        <div className="relative col-span-7 lg:col-span-3 xl:flex lg:flex flex-wrap">
          {/* PIC 1 */}
          <div className="relative w-full mb-20">
            <div className="z-30 absolute top-0 left-0 transform skew-y-6 -skew-x-6 bg-primary bg-opacity-40 w-full h-64 rounded-3xl shadow-lg">
              {/* BG EFFECT */}
            </div>
            <div className="z-30 absolute top-0 left-0 transform skew-y-12 -skew-x-12 bg-secondary bg-opacity-40 w-full h-64 rounded-3xl shadow-lg">
              {/* BG EFFECT */}
            </div>
            <img src="/images/speciality/spec1.jpeg" className="relative w-full z-50 max-h-80 object-cover rounded-3xl shadow-xl bg-white mb-6" alt="Mohammed VI & Lalla Salma" />
          </div>
          {/* PIC 1 */}
          <div className="relative w-full mb-20">
            <div className="z-30 absolute top-0 left-0 transform skew-y-6 -skew-x-6 bg-primary bg-opacity-40 w-full h-64 rounded-3xl shadow-lg">
              {/* BG EFFECT */}
            </div>
            <div className="z-30 absolute top-0 left-0 transform skew-y-12 -skew-x-12 bg-secondary bg-opacity-40 w-full h-64 rounded-3xl shadow-lg">
              {/* BG EFFECT */}
            </div>
            <img src="/images/speciality/spec2.jpeg" className="relative w-full z-50 max-h-80 object-cover rounded-3xl shadow-xl bg-white mb-6" alt="Mohammed VI & Lalla Salma" />
          </div>
          {/* PIC 1 */}
          <div className="relative w-full mb-20">
            <div className="z-30 absolute top-0 left-0 transform skew-y-6 -skew-x-6 bg-primary bg-opacity-40 w-full h-64 rounded-3xl shadow-lg">
              {/* BG EFFECT */}
            </div>
            <div className="z-30 absolute top-0 left-0 transform skew-y-12 -skew-x-12 bg-secondary bg-opacity-40 w-full h-64 rounded-3xl shadow-lg">
              {/* BG EFFECT */}
            </div>
            <img src="/images/speciality/spec3.jpeg" className="relative w-full z-50 max-h-80 object-cover rounded-3xl shadow-xl bg-white mb-6" alt="Mohammed VI & Lalla Salma" />
          </div>
        </div>
      </div>



    </SectionLayout>
  )
}

export default SpecialityDetails
