
import Title from './../../UI/article/Title';
import Paragraph from './../../UI/article/Paragraph';
import SpecialityImage from './SpecialityImage';
import Subtitle from './../../UI/article/Subtitle';


const SpecialityDetails = () => {
  return (
    <section className="flex flex-row flex-wrap xl:p-14 lg:p-14 md:p-10 sm:p-8 p-8">

      <article className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
        <Title>Chirurgie Gynécologique</Title>
        <Paragraph>
          La chirurgie gynécologique et mammaire s’intéresse aux organes génitaux de la femme : vulve, vagin, utérus et ses annexes (ovaires et trompes), seins.
        </Paragraph>
        <Paragraph>
          Elle consiste à pratiquer des interventions dans le cadre de la prise en charge de plusieurs affections, essentiellement dans la pathologie onco-gynécologique.
        </Paragraph>
        <Paragraph>
          Le service d’onco-gynécologie pour détection précoce des cancers et traitement chirurgicale des cancers gynéco-mammaire assures plusieurs activités :
        </Paragraph>

        <Subtitle addClass="font-semibold" margins="mb-2">
          Consultation onco-gynécologie :
        </Subtitle>
        <ul className="ml-4 mb-6">
          <li>- Dépistage du cancer du sein et du col</li>
          <li>- Consultation colposcopie (mardi-jeudi)</li>
          <li>- Consultation orthogénie (mercredi)</li>
          <li>- Consultation d’oncofértilité</li>
          <li>- Consultation onco-gynécologie (chaque jours)</li>
          <li>- Consultation de soutien psychologique</li>
        </ul>


        <Subtitle addClass="font-semibold" margins="mb-2">
          Types d'interventions chirurgicales :
        </Subtitle>
        <Paragraph margins="mb-2">
          <span className="font-semibold">-Chirurgie du sein</span> : traitement conservateur , oncoplasti.
        </Paragraph>
        <Paragraph margins="mb-2">
          <span className="font-semibold">-Chirurgie radicale</span> avec une reconstruction mammaire immédiate et différée par prothése/lambeau.
        </Paragraph>
        <Paragraph margins="mb-2">
          <span className="font-semibold">-Chirurgie gynécologique</span> conventionnelle et laparoscopie
        </Paragraph>
        <ul className="ml-4 mb-2">
          <li>- Cancer du col</li>
          <li>- Cancer de l’ovaire</li>
          <li>- Cancer de l’endomètre</li>
          <li>- Cancer de la vulve</li>
        </ul>
        <Paragraph>
          <span className="font-semibold">-Chirurgie gynécologique</span> bénigne ( Prolapsus , myomectomie ……. ).
        </Paragraph>

        <Subtitle>- STAFFS :</Subtitle>
        <ul className="mb-4 ml-3">
          <li><strong>MARDI :</strong> activité scientifique et étude de dossier</li>
          <li><strong>JEUDI :</strong> programme opératoire</li>
          <li><strong>VENDREDI :</strong> Réunion de concertation pluridisciplinaire</li>
        </ul>
      </article>

      <div className="xl:w-1/12 lg:w-1/12 md:w-1/12 xl:flex lg:flex md:flex hidden"></div>

      <SpecialityImage imageSrc="/images/common/7.jpg" />

      {/* ########################################## */}
      <div className="w-full my-8 flex items-center justify-center">
        <hr className="h-1 w-2/12 bg-fourth xl:hidden lg:hidden md:hidden" />
      </div>
      {/* ########################################## */}

      
      <SpecialityImage imageSrc="/images/common/8.jpg" />

      <div className="xl:w-1/12 lg:w-1/12 md:w-1/12 xl:flex lg:flex md:flex hidden"></div>

      <article className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
        <Title>Oncologie Médical</Title>
        <Paragraph>
          L'oncologie est la spécialité médicale qui se consacre au diagnostic, au suivi et au traitement Médicamenteux des patients atteints de cancers.
        </Paragraph>
        <Paragraph>
          Elle Assure des soins multidisciplinaires offerts aux patients atteints d'un cancer .
        </Paragraph>
        <Paragraph addClass="font-semibold" margins="mb-2">
          Les différents modes de traitement :
        </Paragraph>
        <ul className="ml-2 mb-4">
          <li>- La chimiothérapie</li>
          <li>- L’immunothérapie</li>
          <li>- L’hormonothérapie</li>
          <li>- Les biothérapies ou thérapeutiques ciblées</li>
          <li>- Thérapies orales</li>
        </ul>
        <Paragraph>
          Elle s’occupe aussi de tout les autres problèmes liés au cancer ou aux effets indésirables des traitements : douleur, fatigue, problèmes nutritionnels, digestifs, respiratoires et génito-urinaires, moteurs, odontologiques... mais aussi sociaux et psychologiques
        </Paragraph>

      </article>

    </section>
  )
}

export default SpecialityDetails
