
import Head from 'next/head';
import AppLayout from '../../../components/layout/AppLayout';
import JumboLayout from '../../../components/layout/jumbo/index';
import Title from './../../../components/UI/article/Title';
import Paragraph from './../../../components/UI/article/Paragraph';
import SectionLayout from './../../../components/layout/section/SectionLayout';
import Subtitle from './../../../components/UI/article/Subtitle';

export default function SeinPage() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca, Spécialités du Centre Mohammed 6, Spécialité CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page Spécialités" />
        <meta name="description" content="Envoyez un message au service onco-gynécologie du Centre Mohammed IV pour le traitement du cancer." />
        <link rel="icon" href="/images/logo.ico" />
        <title>Cander du Sein | CENTRE MOHAMMED VI POUR LE TRAITEMENT DES CANCERS</title>
      </Head>

      <AppLayout>
        <JumboLayout title="Cancer du Sein" subtitle={"Qu’est-ce que le cancer du sein ?"} image="/icons/RIBBON.png" />
        <SectionLayout>
          <article>
            <Title customClass={"text-center"}>
              Cancer du sein
            </Title>
            <Paragraph addClass={"mb-4"}>
              Le cancer du sein est le premier cancer chez la femme dans le monde ; au Maroc
              il représente : 20 %de tous les cancers, 35 ,8 % de tous les cancers féminins et
              8000 nouveaux cas par an . C’est la première cause de décès par cancer chez la
              femme. Il est aussi possible chez l’homme, mais il reste rare (1% du nombre
              total de cancer du sein). 60 à 70% des cancers du sein sont hormonodépendants.
            </Paragraph>
            <Paragraph addClass={"mb-4"}>
              Le cancer du sein correspond à une prolifération anormale des cellules dans la
              glande mammaire. C'est le plus souvent un carcinome né de l'épithélium des
              glandes proprement dites ou de leur canaux.
            </Paragraph>
            <Paragraph>
              Dans 90 % des cas, le cancer du sein est découvert lors d’un dépistage organisé
              (ou individuel), et dans 10 % des cas, par un examen clinique faisant suite à des
              signes d’appel : masse palpable, écoulement unipore sérosanglant
              mamelonnaire, maladie de Paget du mamelon.
            </Paragraph>



            <Subtitle customClass="text-red-500">
              Dépistage ?
            </Subtitle>

            <Paragraph addClass={"font-bold"} margins="mb-3">
              Auto-examen:
            </Paragraph>
            <Paragraph>
              L'auto-examen des seins ou autopalpation regroupe un ensemble de gestes
              simples qui, pratiqués tous les mois, après les règles, vous permettent de bien
              connaître vos seins, de détecter toute anomalie et de la signaler à vote médecin.
            </Paragraph>

            <Paragraph addClass={"font-bold"} margins="mb-3">
              Mammographie complète par échographie si nécessaire
            </Paragraph>
            <Paragraph>
              La mammographie est l’examen de référence de dépistage du cancer du sein . elle
              permet de découvrir un éventuel cancer du sein à un stade précoce augmentant
              ainsi les chances de guérison grâce à un traitement précoce . le système BIRADS de l’American Collège of Radiology (ACR) est utilisé pour classer les
              images mammographiques en 6 catégories .
            </Paragraph>

            <Paragraph addClass="font-semibold">
              Si une anomalie est repérée, des examens complémentaires et notamment une
              biopsie seront prescrits pour confirmer le diagnostic et établir , si nécessaire , un
              bilan d’extension
            </Paragraph>
            <Paragraph addClass="font-semibold">
              La population cible pour le dépistage organisé du cancer du sein est représentée
              par toutes les femmes âgées de 45 ans à 69 ans révolus et les femmes ayant un
              antécédent familial de cancer du sein (grand-mère, mère, tante, sœur).
              <br></br>
              Il est recommandé de la refaire tous les 2 ans si y’a pas de facteurs de risque
              particulier et tous les ans en cas de risque important .
            </Paragraph>


            <Subtitle customClass="text-red-500">
              Traitement ?
            </Subtitle>
            <Paragraph>
              Il existe différents traitements permettant la prise en charge d’un cancer du
              sein. Ils peuvent être utilisés seuls ou en association et sont choisis selon les
              caractéristiques cliniques, biologiques et génétiques de chaque tumeur.
            </Paragraph>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement chirurgical :</Paragraph>
            <Paragraph addClass={"underline font-semibold"} margins={"mb-3"}>Chirurgie du sein :</Paragraph>
            <Paragraph margins={"mb-2"}>
              <span className="font-semibold">- Soit Traitement conservateur</span> (tumorectomie, segmentectomie,
              mastectomie partielle, zonectomie, oncoplastie) : La chirurgie
              conservatrice sera proposée à chaque fois qu’elle sera réalisable
            </Paragraph>
            <Paragraph>
              <span className="font-semibold">
                - Soit Traitement radical
              </span> (mastectomie)
            </Paragraph>
            <Paragraph addClass={"font-bold"} margins="mb-3">Le choix entre les deux options dépends de:</Paragraph>
            <Paragraph margins="mb-2">
              <span className="font-semibold">
                - La tumeur elle-même :&nbsp;
              </span>
              possibilité d’une exérèse uni-centrique avec
              berges saines et résultats esthétiques acceptables.
            </Paragraph>
            <Paragraph>
              <span className="font-semibold">
                - et de la patiente :&nbsp;
              </span>
              le geste est réalisé en concertation avec la patiente ,
              après une information complète sur les avantages et inconvénients de
              chacune des deux options.
            </Paragraph>

            <Paragraph margins={"mb-3"}>
              <span className="underline font-semibold">Chirurgie ganglionnaire de l’aisselle :</span>
              &nbsp;en cas d’un carcinome mammaire
              infiltrant, la chirurgie mammaire s’accompagne d’un geste chirurgical axillaire.
            </Paragraph>
            <Paragraph margins="mb-2">
              <span className="font-semibold">
                - Biopsie du ganglion sentinelle 
              </span>
            </Paragraph>
            <Paragraph>
              <span className="font-semibold">
                - Curage axillaire 
              </span>
            </Paragraph>


            <Paragraph addClass={"text-green-600 font-bold"}  margins="mb-2">• Traitement non chirurgical :</Paragraph>
            <Paragraph margins="mb-2">
              - Chimiothérapie
            </Paragraph>
            <Paragraph margins="mb-2">
              - Hormonothérapie
            </Paragraph>
            <Paragraph margins="mb-2">
              - Radiothérapie
            </Paragraph>
            <Paragraph margins="mb-2">
              - Thérapie ciblé
            </Paragraph>

                





          </article>
        </SectionLayout>
      </AppLayout>
    </>
  )
}
