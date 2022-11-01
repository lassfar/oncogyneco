import SpecialityJumbo from "../components/views/speciality/SpecialityJumbo"
import Head from 'next/head';
import AppLayout from './../components/layout/AppLayout';
import SpecialityDetails from "../components/views/speciality/SpecialityDetails";



const SpecialityPage = () => {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca,Spécialités du Centre Mohammed 6, Chirurgie Gynécologique, Oncologie Médical, La chimiothérapie, L’immunothérapie, L’hormonothérapie,Les biothérapies ou thérapeutiques ciblées,Thérapies orales, Page Spécialités" />
        <meta name="description" content="La chirurgie gynécologique et mammaire s’intéresse aux organes génitaux de la femme : vulve, vagin, utérus et ses annexes (ovaires et trompes), seins. L'oncologie est la spécialité médicale qui se consacre au diagnostic, au suivi et au traitement Médicamenteux des patients atteints de cancers." />
        <link rel="icon" href="/images/logo.ico" />
        <meta
          name="og:description"
          content="Spécialités du CHU Mohammed 6 pour traitement des cancers (CHU Ibn Rochd Casablanca)"
        />
        <meta name="og:title" content="Spécialités du CHU Casablanca Mohammed 6" />
        <meta property="og:url" content="https://oncogyneco-chucasa.ma/speciality/" />
        <meta name="language" content="French" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/logo.ico" />
        <title>Notre Specialité | Centre mohammed VI pour le traitement des cancers</title>
      </Head>

      <AppLayout>
        <SpecialityJumbo />
        <SpecialityDetails />
      </AppLayout>
    </>
  )
}

export default SpecialityPage
