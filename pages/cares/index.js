
import Head from 'next/head';
import AppLayout from './../../components/layout/AppLayout';
import JumboLayout from './../../components/layout/jumbo/index';

export default function index() {
  return (
    <>
      <Head>
        <meta name="keyword" content="Oncogyneco Casablanca, Gynécologie Casablanca, Oncologie Casablanca, Spécialités du Centre Mohammed 6, Spécialité CHU Ibn Rochd, Traitement des Cancers Ibn Rochd, Cancer Ibn Rochd, Page Spécialités" />
        <meta name="description" content="Envoyez un message au service onco-gynécologie du Centre Mohammed IV pour le traitement du cancer." />
        <link rel="icon" href="/images/logo.ico" />
        <title>Spécialités | CENTRE MOHAMMED VI POUR LE TRAITEMENT DES CANCERS</title>
      </Head>
    
      <AppLayout>
        <JumboLayout title="OFFRE DE SOINS" subtitle="DIVÉRSIFIÉ ET ACCOMPAGNEMENT COMPLET" image="/images/design/3.png" />        
      </AppLayout>
    </>
  )
}
