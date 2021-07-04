
import AppLayout from './../components/layout/AppLayout';
import Head from 'next/head';
import NewsJumbo from './../components/views/news/NewsJumbo';
import NewsDetails from './../components/views/news/NewsDetails';

export default function news() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca,Centre Mohammed 6 Actualités, CHU Ibn Rochd Articles, Traitement des Cancers Ibn Rochd Nouveautés, Cancer Ibn Rochd News, Page Actualités " />
        <meta name="description" content="Centre Mohammed 6 pour traitement du cancer, Articles et Actualités" />
        <link rel="icon" href="/images/logo.ico" />
        <title>Actualités | Centre mohammed VI pour le traitement des cancers</title>
      </Head>

      <AppLayout>
        <NewsJumbo />
        <NewsDetails />
      </AppLayout>
    </>
  )
}
