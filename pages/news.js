
import AppLayout from './../components/layout/AppLayout';
import Head from 'next/head';
import NewsJumbo from './../components/views/news/NewsJumbo';
import NewsDetails from './../components/views/news/NewsDetails';

export default function news() {
  return (
    <>
      <Head>
        <title>Actualités | Centre mohammed VI pour le traitement des cancers</title>
        <meta name="description" content="Actualités" />
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <AppLayout>
        <NewsJumbo />
        <NewsDetails />
      </AppLayout>
    </>
  )
}
