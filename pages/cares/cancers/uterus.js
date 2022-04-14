
import Head from 'next/head';
import AppLayout from '../../../components/layout/AppLayout';
import JumboLayout from '../../../components/layout/jumbo/index';
import Title from './../../../components/UI/article/Title';
import Paragraph from './../../../components/UI/article/Paragraph';
import SectionLayout from './../../../components/layout/section/SectionLayout';
import Subtitle from './../../../components/UI/article/Subtitle';

export default function UterusPage() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca, Spécialités du Centre Mohammed 6, Spécialité CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page Spécialités" />
        <meta name="description" content="Envoyez un message au service onco-gynécologie du Centre Mohammed IV pour le traitement du cancer." />
        <link rel="icon" href="/images/logo.ico" />
        <title>Cander du Col de l'Utérus | CENTRE MOHAMMED VI POUR LE TRAITEMENT DES CANCERS</title>
      </Head>

      <AppLayout>
        <JumboLayout title="Cancer du Col de l'Utérus" subtitle={"Qu'est-ce que le cancer du col ?"} image="/icons/RIBBON.png" />
        <SectionLayout>
          <article>
            <Title customClass={"text-center"}>
              Cancer du Col de l'Utérus
            </Title>
            <Paragraph addClass={"mb-2"}>
              Le cancer du col de l'utérus compte parmi les cancers les plus fréquents.il est,
              dans la majorité des cas, une affection d’origine infectieuse à évolution lente
              dont L’agent pathogène incriminé est le papillomavirus (HPV).

            </Paragraph>
            <Paragraph addClass={"mb-2"}>
              L’infection persistante se traduit ensuite par des lésions histologiques
              précancéreuses : les néoplasies cervicales intra-épithéliales (ou CIN) de
              différents grades. Ces lésions peuvent régresser spontanément, persister ou
              évoluer vers un cancer du col utérin.

            </Paragraph>
            <Paragraph>
              D’où l’intérêt du dépistage de ces lésions précancéreuses .
            </Paragraph>

            <Paragraph addClass={"text-xl font-bold uppercase"}>
              UN TEST DE DÉPISTAGE RÉGULIER, C’EST IMPORTANT
            </Paragraph>


            <Subtitle customClass="text-red-500">
              Dépistage ?
            </Subtitle>

            <Paragraph margins="mb-3">
              <span className="font-semibold italic">Comment ?</span>
              <br></br>
              Il se fait par frottis du col de l'utérus (frottis cervico-utérin). Cet examen,
              indolore et rapide, peut être réalisé par un gynécologue ou le médecin traitant. Il
              permet de prélever quelques cellulessur le col utérin par un cytobrush qui seront
              analysées en laboratoire. L'analyse recherchera la présence de cellules anormales
              ou cancéreuses.
            </Paragraph>
            <Paragraph>
              <span className="font-semibold italic">Pour qui ?</span>
              <br></br>
              Le test de dépistage est recommandé à partir de 25 ans, même si vous êtes
              vaccinée contre les HPV et jusqu’à 65 ans.
            </Paragraph>


            <Subtitle customClass="text-red-500">
              Diagnostique ?
            </Subtitle>
            <ul className="ml-4 mb-6">
              <li>
                -Circonstances de découverte : métrorragies , frottis anormaux , leucorrhées , dyspareunies …..
              </li>
              <li>
                -examen du col au speculum
              </li>
              <li>
                -colposcopie
              </li>
              <li>-Le diagnostic positif repose sur l’examen anatomopathologique de
                biopsies cervicales ou d’une pièce de conisation pour les formes
                infracliniques
              </li>
              <li>
                -Bilan d’extension locorégionale : IRM pelvienne
              </li>
            </ul>

            <Subtitle customClass="text-red-500">
              Modalité de traitement ?
            </Subtitle>

            <Paragraph margins="mb-3">
              Il existe trois types de traitement :
            </Paragraph>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement chirurgical :</Paragraph>
            <ul className="mb-4">
              <li>- La conisation</li>
              <li>- Hystérectomie totale</li>
              <li>- La colpohystérectomie totale élargie avec annexectomie bilatérale et
                lymphadénectomie pelvienne +/- lomboaortique .</li>
            </ul>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement non chirurgical :</Paragraph>
            <ul className="mb-4">
              <li>- Radiothérapie</li>
              <li>- Chimiothérapie</li>
            </ul>

            <Paragraph>
              Le choix du traitement va dépendre de l’étendue du cancer défini par son stade
              mais également de votre âge, de vos antécédents médicaux et de votre désir de
              grossesse. Chaque patiente étant différente, le traitement va lui être adaptée
              spécifiquement.
            </Paragraph>


            <Subtitle customClass="text-red-500">
              Prevention :
            </Subtitle>
            <Paragraph addClass={"font-semibold"}>
              La vaccination est un moyen complémentaire de prévention :
              <br></br>
              Elle est recommandée pour les jeunes filles entre 11 ans et 14 ans. Elle peut
              également être proposée en rattrapage jusqu'à l'âge de 19 ans

            </Paragraph>


          </article>
        </SectionLayout>
      </AppLayout>
    </>
  )
}
