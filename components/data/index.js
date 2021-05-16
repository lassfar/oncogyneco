import * as aiIcon from 'react-icons/ai'
import * as hiIcon from 'react-icons/hi'

export const specialityList = [
  {
    title: 'CHIRURGIE GYNÉCOLOGIQUE',
    desc: `la chirurgie gynécologique et mammaire s’intéresse aux organes génitaux de la femme : vulve, vagin, utérus et ses annexes (ovaires et trompes), seins.`,
    imgUrl: '/images/common/7.jpg',
    link: '/speciality'
  },
  {
    title: 'oncologie médical',
    desc: `L'oncologie est la spécialité médicale qui se consacre au diagnostic, au suivi et au traitement Médicamenteux patients atteints de cancers.`,
    imgUrl: '/images/common/8.jpg',
    link: '/speciality'
  },
];

// FOOTER
export const footerLinkList = [
  {
    title: "Plan du site",
    links: [
      { to: "/news", icon: aiIcon.AiOutlineLink, text: "Actualités" },
      { to: "/speciality", icon: aiIcon.AiOutlineLink, text: "Nos spécialités" },
      { to: "/who-we-are", icon: aiIcon.AiOutlineLink, text: "Qui somme-nous" },
      { to: "/contacts", icon: aiIcon.AiOutlineLink, text: "Contacts" },
    ]
  },
  {
    title: "Contact Infos",
    links: [
      { to: "#", icon: aiIcon.AiOutlinePhone, text: "06 66 00 00 00" },
      { to: "#", icon: hiIcon.HiOutlineLocationMarker, text: "Centre Hospitalier Universitaire Mohammed VI Route de Casa Km 17 BP 398 Casablanca, Maroc" },
      { to: "mailto:oncogyneco.chucasa@gmail.com", icon: hiIcon.HiOutlineMail, text: "oncogyneco.chucasa@gmail.com" }
    ]
  },
];

export const contactInfos = [
  { title: 'Téléphone', to: "tel:0600000000", icon: aiIcon.AiOutlinePhone, text: "06 66 00 00 00" },
  { title: 'Location', to: "#", icon: hiIcon.HiOutlineLocationMarker, text: `Centre Hospitalier Universitaire Mohammed VI Route de Casa Km 17 BP 398 Casablanca, Maroc` },
  { title: 'Email', to: "mailto:oncogyneco.chucasa@gmail.com", icon: hiIcon.HiOutlineMail, text: "oncogyneco.chucasa@gmail.com" }
];


export const careTypeList = [
  {
    title: 'Sein',
    desc: `Le cancer du sein correspond à une prolifération anormale des cellules dans la glande mammaire.`,

    imgUrl: '/icons/BREAST.png'
  },
  {
    title: 'Col de l\'utérus',
    desc: `Le cancer du col de l'utérus est une tumeur localisée au niveau de la muqueuse utérine`,
    imgUrl: '/icons/UTERUS.png'
  },
  {
    title: 'Endometre',
    desc: `L’endomètre est le tissu qui tapisse la paroi intérieure du corps de l’utérus`,
    imgUrl: '/icons/UTERUS.png'
  },
  {
    title: 'Ovaire',
    desc: `il prend naissance dans les cellules de l’un ou des deux ovaires.`, 
    imgUrl: '/icons/UTERUS.png'
  },
  {
    title: 'Vulve',
    desc: ``,
    imgUrl: '/icons/RIBBON.png'
  },
];

export const partnerList = [
  { imgUrl: '/images/partners/1.jpg', alt: 'Fondation Lalla Salma partenaire' },
  { imgUrl: '/images/partners/2.png', alt: 'CHU IBN ROCHD partenaire' },
  { imgUrl: '/images/partners/3.png', alt: 'INDH partenaire' },
  { imgUrl: '/images/partners/4.png', alt: 'ministère dela santé maroc partenaire' },
  { imgUrl: '/images/partners/5.png', alt: 'Royaume du Maroc partenaire' },
];