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



export const blogList = [
  {
    title: 'Ouverture de la maison de vie de Tanger',
    desc: `La Maison de Vie Tanger de la Fondation Lalla Salma a désormais ouvert ses portes. Les patients en cours de traitement au Centre Régional d'Oncologie Ahmad Bin Zayed Al Nahyan de Tanger peuvent dorénavant séjourner avec leurs accompagnants à deux pas du centre durant la période du traitement ambulatoire et continuer leurs cures sans besoin de se déplacer.
    \n\n
    La maison de vie offrira également un ensemble d’activités d’accompagnement des patients en leur apportant le soutien moral et psychologique nécessaire pour les encourager à suivre leur traitement en toute sérénité.`,
    link: '/news',
    imgUrl: 'image/news/1.jpg'
  },
  {
    title: 'Guide pratique des soins infirmiers en oncologie - Edition 2021',
    desc: `Le guide pratique des soins infirmiers en oncologie a été élaboré par le personnel infirmier de l’Institut National d’Oncologie (INO) en partenariat avec la Fondation Lalla Salma- Prévention et traitement des cancers. C’est un outil qui permet d’apprendre les bonnes pratiques et de standardiser les activités des infirmiers, en particulier en oncologie.
    \n\n
    Cette première partie du guide porte un regard transversal sur les différentes pratiques communes aux soins en termes de précautions, de standards d’hygiène hospitalière et de techniques utilisées régulièrement pour les soins infirmiers.
    \n\n
    La deuxième, qui est en cours d’élaboration, sera consacrée aux fiches techniques des pratiques spécialisées en cancérologie par discipline (radiothérapie, oncologie médicale, chirurgie, radiologie, …etc.).`,
    link: '/news',
    imgUrl: 'image/news/2.png'
  },
  {
    title: `Ouverture du Centre Régional d'Oncologie de Laâyoune : Février 2021`,
    desc: `Le Centre Régional d'Oncologie de Laâyoune a pour mission la prise en charge spécialisée des patients atteints de cancer dans la Région de Laâyoune Sakia Al Hamra. Il peut accueillir jusqu'à 2 000 patients par an. Ainsi tous les patients atteints de cancers qui étaient auparavant référés pour une prise en charge à Agadir ou à Marrakech seront pris en charge près de chez eux.

    Le Centre Régional d'Oncologie de Laâyoune regroupe différentes unités hospitalières, en plus de l’administration et des services généraux :
    \n\n
    - Unité de consultation
    \n\n
    - Unité de traitement de radiothérapie
    \n\n
    - Unité de traitement de chimiothérapie en hôpital de jour
    \n\n
    - Unité de pharmacie
    \n\n
    - Unité d’hospitalisation de chimiothérapie et de radiothérapie
    \n\n
    Le centre est doté d'un Dossier Patient Informatisé centré sur le patient et développé avec les dernières technologies. Ce système permet de maîtriser et de fluidifier les circuits des patients atteints du cancer, pour une meilleure prise en charge.
    \n\n
    Ce nouveau centre, entièrement construit et équipé par la Fondation Lalla Salma est un centre public d'oncologie relevant du Ministère de la Santé, il ouvre ses portes aux patients cette semaine !`,
    link: '/news',
    imgUrl: 'image/news/3.jpg'
  },
  {
    title: 'Programme accès aux médicaments innovants',
    desc: `La Fondation Lalla Salma - Prévention et traitement des cancers, a renouvelé, pour la 12ème année consécutive, le protocole d'accord avec les Laboratoires Roche Maroc pour l'accès des patients RAMEDistes aux traitements anti-cancéreux innovants.  
    \n\n
    Ce renouvellement confirme encore une fois le caractère durable de la collaboration unissant les deux partenaires et son approche globale qui s’inscrit dans les orientations du Plan National de Prévention et de Contrôle des cancers.
    \n\n
    Ce protocole permet chaque année, de faire bénéficier plus de 1500 patients démunis de thérapies innovantes contre le cancer qui répondent aux standards et protocoles internationaux.
    \n\n
    Selon les termes de ce protocole, et au-delà de ce programme d’accès, les deux partenaires vont aussi continuer à œuvrer pour mettre en place des projets qui permettent d'améliorer la prise en charge des patients atteints de cancer au Maroc.
    \n\n
    Il s'agira, entre autres, de mettre en place des campagnes de sensibilisation auprès des professionnels de santé et du public, la promotion de la formation médicale en oncologie en faveur du personnel médical et paramédical et des personnes intervenant dans le domaine de la lutte contre le cancer, ou encore le soutien pour la mise en place d'études épidémiologiques, en particulier pour les registres du cancer.`,
    link: '/news',
    imgUrl: 'image/news/4.jpg'
  },
];