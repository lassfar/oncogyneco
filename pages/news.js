
import AppLayout from './../components/layout/AppLayout';
import Head from 'next/head';
import NewsJumbo from './../components/views/news/NewsJumbo';
import NewsDetails from './../components/views/news/NewsDetails';

export default function news() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Centre Oncologie Casablanca, Centre Mohammed 6 Actualités, CHU Ibn Rochd, Centre Mohamed 6 Articles, Traitement des Cancers Ibn Rochd Nouveautés, Cancer Ibn Rochd News, Page Actualités " />
        <meta name="description" content="Centre Mohammed 6 pour traitement du cancer, Articles et Actualités (CHU Ibn Rochd Casablanca)" />
        <meta name="og:image" content="/images/oncogyneco-chucasa.png" />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="Centre Mohammed 6 pour traitement des cancers, Articles et Actualités (CHU Ibn Rochd Casablanca)"
        />
        <meta name="og:title" content="Actualités" />
        <meta property="og:url" content="https://oncogyneco-chucasa.ma/news/" />
        <meta name="language" content="French" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/logo.ico" />
        <title>Actualités | Centre mohammed 6 pour le traitement des cancers</title>
      </Head>

      <AppLayout>
        <NewsJumbo />
        <NewsDetails />
      </AppLayout>
    </>
  )
}
