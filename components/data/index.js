import * as aiIcon from 'react-icons/ai'
import * as hiIcon from 'react-icons/hi'

export const specialityList = [
  {
    title: 'CHIRURGIE GYNÉCOLOGIQUE',
    desc: `la chirurgie gynécologique et mammaire s’intéresse aux organes génitaux de la femme : vulve, vagin, utérus et ses annexes (ovaires et trompes), seins.`,
    imgUrl: '/images/common/7.jpg',
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
      { to: "/presentation", icon: aiIcon.AiOutlineLink, text: "Qui somme-nous" },
      { to: "/contact", icon: aiIcon.AiOutlineLink, text: "Contacts" },
    ]
  },
  {
    title: "Contact Infos",
    links: [
      // { to: "#", icon: aiIcon.AiOutlinePhone, text: "06 66 00 00 00" },
      { to: "https://www.google.com/maps/place/University+Hospital+Center+Ibn+Rochd+-+Casablanca/@33.579503,-7.621112,14z/data=!4m9!1m2!2m1!1sCentre+Hospitalier+Universitaire+Ibn+Rochd+-+Casablanca!3m5!1s0xda7cd48273dd637:0xa82eac514540569f!8m2!3d33.581258!4d-7.6197661!15sCjdDZW50cmUgSG9zcGl0YWxpZXIgVW5pdmVyc2l0YWlyZSBJYm4gUm9jaGQgLSBDYXNhYmxhbmNhkgEIaG9zcGl0YWw", icon: hiIcon.HiOutlineLocationMarker, text: "Centre Hospitalier Universitaire Ibn Rochd - Casablanca" },
      { to: "mailto:oncogyneco.chucasa@gmail.com", icon: hiIcon.HiOutlineMail, text: "oncogyneco.chucasa@gmail.com" }
    ]
  },
];

export const contactInfos = [
  // { title: 'Téléphone', to: "tel:0600000000", icon: aiIcon.AiOutlinePhone, text: "06 66 00 00 00" },
  { title: 'Location', to: "#", icon: hiIcon.HiOutlineLocationMarker, text: `Centre Hospitalier Universitaire Ibn Rochd - Casablanca` },
  { title: 'Email', to: "mailto:oncogyneco.chucasa@gmail.com", icon: hiIcon.HiOutlineMail, text: "oncogyneco.chucasa@gmail.com" }
];


export const careTypeList = [
  {
    id: 'careCard1',
    title: 'Sein',
    desc: `Le cancer du sein correspond à une prolifération anormale des cellules dans la glande mammaire.`,
    imgUrl: '/icons/BREAST.png',
    link: '/cares/cancers/sein'
  },
  {
    id: 'careCard2',
    title: 'Col de l\'utérus',
    desc: `Le cancer du col de l'utérus est une tumeur localisée au niveau de la muqueuse utérine`,
    imgUrl: '/icons/UTERUS.png',
    link: '/cares/cancers/uterus'
  },
  {
    id: 'careCard3',
    title: 'Endometre',
    desc: `L’endomètre est le tissu qui tapisse la paroi intérieure du corps de l’utérus`,
    imgUrl: '/icons/UTERUS.png',
    link: '/cares/cancers/endometre'
  },
  {
    id: 'careCard4',
    title: 'Ovaire',
    desc: `il prend naissance dans les cellules de l’un ou des deux ovaires.`, 
    imgUrl: '/icons/UTERUS.png',
    link: '/cares/cancers/ovaire'
  },
  {
    id: 'careCard5',
    title: 'Vulve',
    desc: `Le cancer de la vulve est une tumeur maligne située généralement sur la face interne des grandes lèvres ou sur les petites lèvres. La vulve est la partie apparente externe des organes génitaux de la femme. Le vagin en est le prolongement. Le cancer de la vulve n'est pas le plus fréquent des cancers gynécologiques.`,
    imgUrl: '/icons/RIBBON.png',
    link: '/cares/cancers/vulve'
  },
];


export const partnerList = [
  { imgUrl: '/images/partners/1.jpg', alt: 'Fondation Lalla Salma partenaire' },
  { imgUrl: '/images/partners/2.png', alt: 'CHU IBN ROCHD partenaire' },
  { imgUrl: '/images/partners/3.png', alt: 'INDH partenaire' },
  { imgUrl: '/images/partners/4.png', alt: 'ministère dela santé maroc partenaire' },
  { imgUrl: '/images/partners/6.png', alt: 'Casablanca City partenaire' },
];



export const newsList = [
  {
    id: 1,
    title: 'Reconstruction mammaire aprés mastectomie dans le cadre de traitement contre le cancer du sein',
    desc: `La reconstruction mammaire(RM) fait partie intégrante de la prise en charge du cancer du sein, en particulier après une chirurgie mammaire non conservatrice(ou mastectomie).`,
    image: '/images/news/1.jpg'
  }
];