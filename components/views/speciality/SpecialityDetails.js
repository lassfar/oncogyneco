
import Title from './../../UI/article/Title';
import Paragraph from './../../UI/article/Paragraph';
import SpecialityImage from './SpecialityImage';


const SpecialityDetails = () => {
  return (
    <section className="flex flex-row flex-wrap xl:p-14 lg:p-14 md:p-10 sm:p-8 p-8">

      <article className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
        <Title>Chirurgie Gynécologique</Title>
        <Paragraph>
          La chirurgie gynécologique et mammaire s’intéresse aux organes génitaux de la femme : vulve, vagin, utérus et ses annexes (ovaires et trompes), seins.
        </Paragraph>
        <Paragraph>
          Elle consiste à pratiquer des interventions dans le cadre de la prise en charge de plusieurs affections, que ce soit pour une tumeur bénigne (kyste au sein, endométriose…) ou cancéreuse (sein, utérus, ovaires), en chirurgie fonctionnelle uro-gynécologique ou pelvienne ou bien Contraception définitive . 
        </Paragraph>
        <Paragraph>
          En cas de cancer, La chirurgie oncologique représente la méthode la plus ancienne de traitement du cancer et la plus courante. Elle permet L'enlèvement des tumeurs et des tissus cancéreux .
        </Paragraph>
        <Paragraph addClass="font-semibold" margins="mb-2">
          Types d'interventions chirurgicales :
        </Paragraph>
        <ul className="ml-4 mb-6">
          <li>- Myomectomie (polymyomectomie)</li>
          <li>- Conisation</li>
          <li>- Hystérectomie total ou subtotal</li>
          <li>- Cure de prolapsus</li>
          <li>- Chirurgie des annexes</li>
          <li>- Hysteroscopie</li>
          <li>- Tumorectomie / mastectomie avec ou sans curage ganglionnaire axillaire</li>
          <li>- Ganglion sentinelle</li>
        </ul>
        <Paragraph addClass="font-semibold" margins="mb-2">
          Techniques :
        </Paragraph>
        <ul className="ml-4 mb-4">
          <li>- Chirurgie ouverte</li>
          <li>- Endoscopique</li>
        </ul>
        <Paragraph>
          La chirurgie gynécologique est actuellement de plus en plus moins invasive , diminuant au minimum les cicatrices et en améliorant la récupération post-opératoire .
        </Paragraph>
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
          L'oncologie est la spécialité médicale qui se consacre au diagnostic, au suivi et au traitement Médicamenteux  patients atteints de cancers.
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
