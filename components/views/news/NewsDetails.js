
import Title from './../../UI/article/Title';
import Subtitle from './../../UI/article/Subtitle';
import Paragraph from './../../UI/article/Paragraph';

const NewsDetails = () => {
  return (
    <div className="flex flex-wrap xl:p-14 lg:p-14 md:p-10 sm:p-8 p-8">
      <article className="xl:w-8/12 lg:w-8/12 text-lg mx-auto" id="articleSection">
        <Title>Reconstruction mammaire aprés mastectomie dans le cadre de traitement contre le cancer du sein</Title>
        <Subtitle>
          Quand on peut faire la RM?
        </Subtitle>
        <Paragraph>
          La reconstruction peut être  immédiate , c'est à dire en même temps que la chirurgie du cancer, ou bien différé
        </Paragraph>

        <Subtitle>
          Quels sont les méthodes de RM?
        </Subtitle>
        <Paragraph>
          Il existe deux principales méthodes de reconstruction mammaire, parfois associées : la mise en place d'une prothèse interne (implant mammaire) et l'utilisation de tissus provenant d'autres parties du corps (reconstruction par lambeau)
        </Paragraph>
        
        <Subtitle>Comment le choix du type de RM est fait ?</Subtitle>
        <Paragraph></Paragraph>

        <Subtitle></Subtitle>
        <Paragraph></Paragraph>

        <Subtitle></Subtitle>
        <Paragraph>Le choix du type de reconstruction mammaire dépend de :</Paragraph>

        <ul className="mb-6 ml-2">
          <li>-De l'étendue de la chirurgie du cancer et de la quantité de tissu retirée du sein.</li>
          <li>-De la quantité de tissu disponible pour la reconstruction.</li>
          <li>-De la qualité du tissu dans la région à reconstruire.</li>
          <li>-De la taille et de la forme de l'autre sein.</li>
          <li>-De votre état de santé général et de vos troubles de santé existants éventuels.</li>
          <li>-De votre constitution corporelle.</li>
          <li>-De vos préférences et de vos attente.</li>
        </ul>


      </article>
    </div>
  )
}

export default NewsDetails
