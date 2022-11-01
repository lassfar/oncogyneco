
import AppLayout from '../components/layout/AppLayout';
import Head from 'next/head';
import PresentJumbo from '../components/views/present/PresentJumbo';
import PresentDetails from '../components/views/present/PresentDetails';

export default function WhoWeAre() {
  return (
    <>
      <Head>
        <title>Présentation | Centre mohammed VI pour le traitement des cancers</title>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca,Centre Mohammed 6, CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page Présentation " />
        <meta name="description" content="Centre d'oncologie pour le traitement des cancers au centre hospitalier universitaire Ibn Rochd de Casablanca a été inauguré en 2013 par Sa Majesté le Roi Mohammed 6" />
        <link rel="icon" href="/images/logo.ico" />
        <meta
          name="og:description"
          content="Présentation du Centre Mohammed 6 pour traitement des cancers (CHU Ibn Rochd Casablanca)"
        />
        <meta name="og:title" content="Actualités" />
        <meta property="og:url" content="https://oncogyneco-chucasa.ma/presentation/" />
        <meta name="language" content="French" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <AppLayout>
        <PresentJumbo />
        <PresentDetails />
      </AppLayout>
    </>
  )

}