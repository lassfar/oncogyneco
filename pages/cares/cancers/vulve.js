
import Head from 'next/head';
import AppLayout from '../../../components/layout/AppLayout';
import JumboLayout from '../../../components/layout/jumbo/index';
import Title from '../../../components/UI/article/Title';
import Paragraph from '../../../components/UI/article/Paragraph';
import SectionLayout from '../../../components/layout/section/SectionLayout';
import Subtitle from '../../../components/UI/article/Subtitle';

export default function VulvePage() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca, Spécialités du Centre Mohammed 6, Spécialité CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page Spécialités" />
        <meta name="description" content="Envoyez un message au service onco-gynécologie du Centre Mohammed IV pour le traitement du cancer." />
        <link rel="icon" href="/images/logo.ico" />
        <title>Cancer de Vulve | CENTRE D'ENCOLOGIE MOHAMMED 6 POUR LE TRAITEMENT DES CANCERS</title>
      </Head>

      <AppLayout>
        <JumboLayout title="Cancer de Vulve" subtitle={"Qu’est ce que le cancer de vulve ?"} image="/icons/RIBBON.png" />
        <SectionLayout>
          <article>
            <Title customClass={"text-center"}>
              Cancer de Vulve
            </Title>
            <Paragraph addClass={"mb-2"}>Le cancer de l’endomètre compte parmi les cancers gynécologiques les plus
              Les cancers invasifs de la vulve sont peu fréquents, représentant moins de 5%
              des cancers gynécologiques.
              <br />
              Les facteurs favorisants sont les infections à Papillomavirus (HPV) et le tabac,
              Ils surviennent le plus souvent chez des femmes âgées de plus de 70 ans mais il
              existe un premier pic entre 40 et 60 ans
            </Paragraph>


            <Subtitle customClass="text-red-500">
              Diagnostique ?
            </Subtitle>
            <ul className="ml-4 mb-6">
              <li>
                -Le cancer de la vulve se révèle habituellement par une lésion palpable
                d’où l’intérêt d’un examen clinique soigneux de l’ensemble de la vulve ,
                du col utérin et des aires ganglionnaire .

              </li>
              <li>
                -Le diagnostic repose sur la biopsie de la lésion pour examen anatomopathologique
              </li>
              <li>
                -Une colposcopie (en cas d’anomalie cervicale)
              </li>
              <li>
                -Selon la localisation de la tumeur : urétroscopie ± cystoscopie, anuscopie
                (parenté HPV du carcinome épidermoïde du canal anal), rectoscopie
              </li>
              <li>
                -Une échographie inguinale / TDM abdominopelvien / IRM
                abdominopelvien.
              </li>
            </ul>

            <Subtitle customClass="text-red-500">
              Modalité de traitement ?
            </Subtitle>

            <Paragraph margins="mb-3">Le cancer de l’endomètre est le plus souvent traité par la chirurgie.</Paragraph>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement chirurgical :</Paragraph>
            <ul className="mb-4">
              <li>- La vulvectomie totale</li>
              <li>- L'exérèse large conservatrice (vulvectomie partielle)</li>
              <li>- L'exentération pelvienne</li>
            </ul>
            <Paragraph margins="mb-3">l'utilisation des techniques de chirurgie reconstructrice est à envisager avant toute chirurgie</Paragraph>

            <Paragraph addClass={"text-green-600 font-bold"} margins="mb-2">• Traitement non chirurgical :</Paragraph>
            <ul className="mb-4">
              <li>- Radiothérapie</li>
              <li>- Chimiothérapie</li>
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
