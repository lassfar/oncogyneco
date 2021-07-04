
import Head from 'next/head';
import ContactJumbo from '../components/views/contact/ContactJumbo';
import ContactSection from '../components/views/contact/ContactSection';
import AppLayout from './../components/layout/AppLayout';

export default function contact() {
  return (
    <>
      <Head>
        <title>Contactez-Nous | CENTRE MOHAMMED VI POUR LE TRAITEMENT DES CANCERS</title>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca,Centre Mohammed 6, CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page Contact " />
        <meta name="description" content="Centre d'oncologie Mohammed IV pour le traitement du cancer. Envoyez un message" />
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <AppLayout>
        <ContactJumbo />
        <ContactSection />
        {/* <GoogleMapIframe addClass="xl:w-6/12 h-72" /> */}
      </AppLayout>

    </>
  )
}
