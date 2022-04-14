
import Head from 'next/head';
import AppLayout from '../../../components/layout/AppLayout';
import JumboLayout from '../../../components/layout/jumbo/index';
import Title from '../../../components/UI/article/Title';
import Paragraph from '../../../components/UI/article/Paragraph';
import SectionLayout from '../../../components/layout/section/SectionLayout';
import Subtitle from '../../../components/UI/article/Subtitle';

export default function OvairePage() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca, Spécialités du Centre Mohammed 6, Spécialité CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page Spécialités" />
        <meta name="description" content="Envoyez un message au service onco-gynécologie du Centre Mohammed IV pour le traitement du cancer." />
        <link rel="icon" href="/images/logo.ico" />
        <title>Cancer de Vulve | CENTRE MOHAMMED VI POUR LE TRAITEMENT DES CANCERS</title>
      </Head>

      <AppLayout>
        <JumboLayout title="Cancer de l'Ovaire ?" subtitle={"Qu'est ce que le cancer de l'ovaire ?"} image="/icons/RIBBON.png" />
        <SectionLayout>
          <article>
            <Title customClass={"text-center"}>
              Cancer de l'Ovaire ?
            </Title>
            <Paragraph addClass={"mb-2"}>
              Il prend naissance dans les cellules de l’un ou des deux ovaires. La forme la plus
              fréquente, le carcinome épithélial, se développe à partir des cellules formant la
              surface externe (épithélium) de l’ovaire. Plus rares, les tumeurs germinales se
              forment dans les cellules productrices d’ovules à l’intérieur de l’ovaire, tandis
              que les tumeurs stromales touchent le tissu conjonctif liant les différents
              éléments de l’organe.
              <br />
              Les cancers de l'ovaire peuvent être primitifs ou secondaires, c'est-à-dire issus
              d’une métastase.

            </Paragraph>


            <Subtitle customClass="text-red-500">
              Diagnostique ?
            </Subtitle>

            <Paragraph>
              Le cancer de l’ovaire reste longtemps silencieux. Cela explique pourquoi
              le diagnostic est souvent posé lorsque la maladie est déjà avancée.
            </Paragraph>
            <ul className="ml-4 mb-6">
              <li>
                -Echographies :pelvienne , abdominale , endo-vaginale ± doppler couleur.
              </li>
              <li>
                -Un diagnostic anatomopathologique porté à partir d’une biopsie radioguidée ou coelioscopique.
              </li>
              <li>
                -Le bilan d’extension repose sur : TDM TAP , +/- PET scan
              </li>
            </ul>

            <Subtitle customClass="text-red-500">
              Les formes anatomopathologique :
            </Subtitle>

            <table className="border border-primary my-8">
              <thead>
                <tr>
                  <th className="w-5/12 text-left p-3">Origine</th>
                  <th className="w-7/12 text-left p-3">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-r border-primary">
                  {/* TD */}
                  <td className="p-3">
                    Épithélium
                  </td>
                  <td className="p-3">
                    Tumeur de Brenner
                    <br />Adénocarcinome à cellules claires
                    <br />Carcinomes endométrioïdes
                    <br />Carcinomes mucineux
                    <br />Cystadénocarcinomes séreux (le plus fréquent)
                    <br />Carcinomes à cellules transitionnelles
                    <br />Carcinomes non classés
                  </td>
                </tr>
                {/* TD */}
                <tr className="border-t border-r border-primary">
                  <td className="p-3">
                    Cellules germinales primitives
                  </td>
                  <td className="p-3">
                    Choriocarcinomes
                    <br />Dysgerminomes
                    <br />Carcinomes embryonnaires
                    <br />Tumeurs des sinus endodermiques
                    <br />Tératomes immatures
                    <br />Polyembryome
                  </td>
                </tr>
                {/* TD */}
                <tr className="border-t border-r border-primary">
                  <td className="p-3">
                    Cordons sexuels et cellules stromales
                  </td>
                  <td className="p-3">
                    Tumeurs de la granulosa-thèque
                    <br />Tumeurs à cellules de Sertoli-Leydig
                  </td>
                </tr>
                {/* TD */}
                <tr className="border-t border-r border-primary">
                  <td className="p-3">
                    Métastases
                  </td>
                  <td className="p-3">
                    Cancer du sein
                    <br />Cancer digestif
                  </td>
                </tr>
              </tbody>
            </table>



            <Subtitle customClass="text-red-500">
              Modalité de traitement ?
            </Subtitle>

            <Paragraph margins="mb-6">
              La chirurgie est le traitement de première intention du cancer de l’ovaire, hormis
              pour certaines formes évoluées.
            </Paragraph>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement chirurgical :</Paragraph>
            <Paragraph addClass={"font-bold"} margins="mb-2">
              Stade précoce :
            </Paragraph>
            <ul className="mb-4">
              <li>- Hystérectomie totale + annexectomie bilatérale</li>
              <li>- Omentectomie infragastrique / infracolique</li>
              <li>- Appendicectomie (en cas des tumeurs mucineuse)</li>
              <li>- Lymphadénectomie pelvienne et lombo-aortique bilatérale</li>
            </ul>

            <Paragraph addClass={"font-bold"} margins="mb-2">
              Stade avancé :
            </Paragraph>
            <ul className="mb-6">
              <li>- Coelioscopie pour établir une cartographie lésionnelle et réaliser de multiples biopsies.</li>
              <li>- Puis Chirurgie d’intervalle après chimiothérapie néoadjuvante.</li>
            </ul>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement non chirurgical :</Paragraph>
            <ul className="mb-4">
              <li>- Chimiothérapie :associant carboplatine (AUC 5) et du paclitaxel .</li>
              <li>- Thérapie ciblé </li>
              <li>- Immunothérapie </li>
            </ul>


          </article>
        </SectionLayout>
      </AppLayout>
    </>
  )
}
