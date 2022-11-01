import Head from "next/head";
import AppLayout from "./../components/layout/AppLayout";
import HomeJumbo from "../components/views/home/HomeJumbo";
import SpecialitySection from "../components/views/speciality/SpecialitySection";
import CareSection from "../components/views/cares/CareSection";
import PartnerSection from "../components/views/partner/PartnerSection";
import NewsSection from "../components/views/news/NewsSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Centre d'oncologie, CHU Casa, CHU Casablanca, Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca, Centre Mohammed 6, CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page d'accueil "
        />
        <meta
          name="description"
          content="Centre d'oncologie Mohammed 6 pour le traitement du cancer du CHU ibn rochd offre une prise en charge globale médicale et chirurgicale de la plupart des pathologies gynécologiques et mammaire. Hopital D'Oncologie Mohamed 6. Centre D'Oncologie"
        />
        <meta name="og:image" content="/images/oncogyneco-chucasa.png" />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="Centre Mohammed 6 pour le traitement des cancers (CHU Ibn Rochd Casablanca)"
        />
        <meta name="og:title" content="Page d'Accueil" />
        <meta property="og:url" content="https://oncogyneco-chucasa.ma/" />
        <meta name="language" content="French" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/logo.ico" />
        <title>
          Accueil | Centre mohammed VI pour le traitement des cancers
        </title>
      </Head>

      <AppLayout>
        <HomeJumbo />
        <SpecialitySection />
        <CareSection />
        <PartnerSection />
        <NewsSection />
      </AppLayout>
    </>
  );
}
