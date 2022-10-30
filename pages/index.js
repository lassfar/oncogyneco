import Head from 'next/head'
import AppLayout from './../components/layout/AppLayout'
import HomeJumbo from '../components/views/home/HomeJumbo'
import SpecialitySection from '../components/views/speciality/SpecialitySection'
import CareSection from '../components/views/cares/CareSection'
import PartnerSection from '../components/views/partner/PartnerSection'
import NewsSection from '../components/views/news/NewsSection'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Centre d'oncologie, Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca, Centre Mohammed 6, CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page d'accueil " />
        <meta name="description" content="Centre d'oncologie Mohammed 6 pour le traitement du cancer du CHU ibn rochd offre une prise en charge globale médicale et chirurgicale de la plupart des pathologies gynécologiques et mammaire. Hopital D'Oncologie Mohamed 6. Centre D'Oncologie" />
        <link rel="icon" href="/images/logo.ico" />
        <title>Accueil | Centre mohammed VI pour le traitement des cancers</title>
      </Head>

      <AppLayout>
        <HomeJumbo />
        <SpecialitySection />
        <CareSection />
        <PartnerSection />
        <NewsSection />
      </AppLayout>

    </>
  )
}
