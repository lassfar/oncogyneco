
import Head from 'next/head';
import AppLayout from '../../../components/layout/AppLayout';
import JumboLayout from '../../../components/layout/jumbo/index';
import Title from '../../../components/UI/article/Title';
import Paragraph from '../../../components/UI/article/Paragraph';
import SectionLayout from '../../../components/layout/section/SectionLayout';
import Subtitle from '../../../components/UI/article/Subtitle';

export default function EndometrePage() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca, Spécialités du Centre Mohammed 6, Spécialité CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page Spécialités" />
        <meta name="description" content="Envoyez un message au service onco-gynécologie du Centre Mohammed IV pour le traitement du cancer." />
        <link rel="icon" href="/images/logo.ico" />
        <title>Cancer de l’endomètre | CENTRE MOHAMMED VI POUR LE TRAITEMENT DES CANCERS</title>
      </Head>

      <AppLayout>
        <JumboLayout title="Cancer de l’endomètre" subtitle={"Qu'est ce que le cancer de l'endomètre ?"} image="/icons/RIBBON.png" />
        <SectionLayout>
          <article>
            <Title customClass={"text-center"}>
              Cancer de l’endomètre
            </Title>
            <Paragraph addClass={"mb-2"}>Le cancer de l’endomètre compte parmi les cancers gynécologiques les plus
              fréquents.
              <br />
              Il survient généralement après la ménopause et Il est souvent précédé d'une
              hyperplasie endométriale.
              <br />
              Le carcinome de l'endomètre est fréquemment classé en 2 type.
              <br />
              Les principaux facteurs de risque de cancer de l'endomètre sont les suivants :
              <br />
              terrain d’hypéroestrogénie , Âge {'>'} 50 ans , obésité , Diabète ...
            </Paragraph>


            <Subtitle customClass="text-red-500">
              Diagnostique ?
            </Subtitle>
            <ul className="ml-4 mb-6">
              <li>
                -Circonstances de découverte : métrorragies post-ménopausique
              </li>
              <li>
                -Echographie pelvienne et endovaginal : épaississement endométrial
              </li>
              <li>
                -Le diagnostic positif repose sur l’examen anatomopathologique de la
                biopsie de l’endomètre sous hystéroscopie .
              </li>
              <li>
                -IRM pelvienne : bilan d’extension
              </li>
              <li>
                -Bilan d’extension locorégionale : IRM pelvienne
              </li>
            </ul>

            <Subtitle customClass="text-red-500">
              Modalité de traitement ?
            </Subtitle>

            <Paragraph margins="mb-3">Le cancer de l’endomètre est le plus souvent traité par la chirurgie.
            </Paragraph>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement chirurgical :</Paragraph>
            <ul className="mb-4">
              <li>- Hystérectomie totale avec annexectomie bilatérale</li>
              <li>- (+ / -) Curage pelvien et lombo-aortique </li>
              <li>- Autres : Omentectomie , exentération pelvienne</li>
            </ul>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement non chirurgical :</Paragraph>
            <ul className="mb-4">
              <li>- Radiothérapie</li>
              <li>- Chimiothérapie</li>
              <li>- L’Hormonothérapie</li>
            </ul>

            <Paragraph>
              Ces traitements peuvent être utilisés seuls ou être associés entre eux.
            </Paragraph>

          </article>
        </SectionLayout>
      </AppLayout>
    </>
  )
}
