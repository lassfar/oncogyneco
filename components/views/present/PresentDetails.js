
import Title from './../../UI/article/Title';
import Paragraph from './../../UI/article/Paragraph';
import Subtitle from './../../UI/article/Subtitle';

const PresentDetails = () => {
  return (
    <div className="flex flex-row w-full py-16 xl:px-14 lg:px-14 md:px-10 px-8">
      {/* ARTICLE SECTION */}
      <article className="xl:w-8/12 lg:w-8/12 w-full xl:mr-24 lg:mr-20">
        <Title>Centre mohammed VI pour le traitement des cancers</Title>
        <Paragraph>
          Le Centre Mohammed VI pour le traitement des cancers au centre hospitalier universitaire
          Ibn Rochd de Casablanca a été inauguré en 2013 par Sa Majesté le Roi Mohammed VI,
          que Dieu L'assiste, accompagné de SAR la Princesse Lalla Salma, présidente de 
          <q className="italic font-medium text-secondary">l'Association Lalla Salma de lutte contre le cancer</q>,
          traduit l'intérêt particulier
          qu'accorde le Souverain à l'amélioration des conditions d'hospitalisation des patients
          atteints de cette maladie et Sa volonté constante d'alléger leurs souffrances.
        </Paragraph>
        <Paragraph addClass="mb-2">
          Cette structure modèle constitue un axe stratégique du Plan national de prévention et de contrôle 
          du Cancer hospitalière comporte plusieurs pôles :
        </Paragraph>
        <ul className="list-outside mb-8 ml-2">
          <li>•	Un service de Radiothérapie</li>
          <li>•	Un service d'oncologie médicale</li>
          <li>•	Un service de médecine nucléaire</li> 
          <li>•	un service d’onco-gynécologie pour la détection pour la détection précoce le traitement chirurgical des cancers gyneco-mammaire</li>
        </ul>
        <Paragraph>
          D’une superficie totale de 4.046 m2, ce dernier pôle, dont la construction a nécessité 18 mois, est composé d’un plateau technique constitué d’un bloc opératoire avec 3 salles d’opérations, d’une salle de réveil ainsi que d’un service d’hospitalisation d’une capacité de 16 lits.
        </Paragraph>
        <Paragraph>
          Le service onco-gynecologie est composé d’un plateau technique constitué d’un bloc opératoire avec 3 salles d’opérations, d’une salle de réveil , un service d’hospitalisation d’une capacité de 16 lits ainsi qu’un service de consultation doté de 6 salles avec un service de dépistage et de diagnostique précoce de cancer de sein (échographie mammaire , mammographie).
        </Paragraph>
        <Paragraph>
          Les cancers gynéco-mammaires sont la pathologie la plus fréquente chez la femme. Les différentes unités de ce service permettront d’assurer annuellement 20.000 consultations médicales, 1.000 interventions chirurgicales, 1.000 hospitalisations, 2.000 mammographies et 2.000 échographies.
        </Paragraph>
        <Paragraph addClass="font-medium">
          Le service onco-gynecologie a pour missions la prise en charge spécialisée des cancers gynéco-mammaires, la formation des médecins et le développement de la recherche scientifique dans ce domaine.
        </Paragraph>
        <Paragraph>
          Il a la vocation d'élargir le réseau des structures spécialisées dans le traitement du cancer au Maroc, dans la mesure où il est doté d'équipements et de matériels modernes au service des habitants de Casablanca et des régions voisines.
        </Paragraph>
        <Paragraph>
          La mise en place de ce service s'inscrit dans le cadre d'une convention de partenariat entre le ministère de la Santé, le conseil régional du Grand Casablanca, le conseil préfectoral, le conseil de la ville, l'Initiative nationale pour le développement humain (INDH) et le CHU Ibn Rochd de Casablanca et l'Association Lalla Salma de lutte contre le cancer (ALSC).
        </Paragraph>

        <Subtitle>
          Equipe onco-gynécologie :
        </Subtitle>
        <Paragraph addClass="font-bold" margins="mb-4">
          Chirurgien onco-gynecologique :
        </Paragraph>
        <Paragraph addClass="font-semibold" margins="mb-2">Pr.EL KARROUMI MOHAMED</Paragraph>
        <ul className="mb-4 ml-3">
          <li>- Chef de service d’onco-gynecologie de CHU Ibn-Rochd de casablanca</li>
          <li>- Professeur de l’enseignement supérieur de gyneco-obstétrique à la faculté de médecine et de pharmacie de Casablanca</li>
        </ul>
        <Paragraph addClass="font-semibold" margins="mb-2">Pr.ENNACHIT MOHAMED</Paragraph>
        <ul className="mb-4 ml-3">
          <li>- Professeur de l’enseignement supérieur de gyneco-obstétrique à la faculté de médecine et de pharmacie de Casablanca</li>
        </ul>
        <Paragraph addClass="font-semibold" margins="mb-2">Pr.BENHASSOU MUSTAPHA</Paragraph>
        <ul className="mb-4 ml-3">
          <li>- Professeur de l’enseignement supérieur de gyneco-obstetrique à la faculté de médecine et de pharmacie de Casablanca</li>
        </ul>

        <Subtitle>Anesthésie-Réanimateur :</Subtitle>
        <Paragraph addClass="font-semibold" margins="mb-2">Pr.SALMI SAID</Paragraph>
        <ul className="mb-4 ml-3">
          <li>- Chef de service de Réanimation Maternité au CHU Ibn-Rochd de Casablanca</li>
          <li>- Professeur de l’enseignement supérieur d’Anesthésie Réanimation à la faculté de médecine et de pharmacie de Casablanca</li>
        </ul>
        <Paragraph addClass="font-semibold" margins="mb-2">Pr.MOUSSAID IHSANE</Paragraph>
        <ul className="mb-4 ml-3">
          <li>- Professeur de l’enseignement supérieur D’Anesthésie Réanimation à la faculté de médecine et de pharmacie de Casablanca</li>
        </ul>
      </article>

      {/* imgs section */}
      <div className="relative xl:w-4/12 lg:w-4/12 xl:flex lg:flex flex-wrap hidden">
        
        <div className="relative">
          <div className="z-30 absolute top-0 left-0 transform skew-y-6 -skew-x-6 bg-primary bg-opacity-40 w-full h-80 rounded-3xl shadow-lg">
            {/* BG EFFECT */}
          </div>
          <div className="z-30 absolute top-0 left-0 transform skew-y-12 -skew-x-12 bg-secondary bg-opacity-40 w-full h-80 rounded-3xl shadow-lg">
            {/* BG EFFECT */}
          </div>
          <img src="/images/common/jumbo-cover.jpg" className="relative z-50 max-h-80 object-cover rounded-3xl shadow-2xl mb-6" alt="Mohammed VI & Lalla Salma & Equipe CHU Ibn Rochd" />
        </div>

        <div className="relative">
          <div className="z-30 absolute top-0 left-0 transform skew-y-6 -skew-x-6 bg-primary bg-opacity-40 w-full h-64 rounded-3xl shadow-lg">
            {/* BG EFFECT */}
          </div>
          <div className="z-30 absolute top-0 left-0 transform skew-y-12 -skew-x-12 bg-secondary bg-opacity-40 w-full h-64 rounded-3xl shadow-lg">
            {/* BG EFFECT */}
          </div>
          <img src="/images/common/6.jpg" className="relative z-50 max-h-80 object-cover rounded-3xl shadow-xl bg-white mb-6" alt="Mohammed VI & Lalla Salma" />
        </div>

        <div className="relative">
          <div className="z-30 absolute top-0 left-0 transform skew-y-6 -skew-x-6 bg-primary bg-opacity-40 w-full h-80 rounded-3xl shadow-lg">
            {/* BG EFFECT */}
          </div>
          <div className="z-30 absolute top-0 left-0 transform skew-y-12 -skew-x-12 bg-secondary bg-opacity-40 w-full h-80 rounded-3xl shadow-lg">
            {/* BG EFFECT */}
          </div>
          <img src="/images/common/10.jpg" className="relative z-50 max-h-80 object-cover rounded-3xl shadow-2xl mb-6" alt="Mohammed VI & Lalla Salma & Equipe CHU Ibn Rochd" />
        </div>

      </div>

    </div>
  )
}

export default PresentDetails
