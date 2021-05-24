import JumboLayout from './../../layout/jumbo/index';
import * as bsIcon from "react-icons/bs"
import Button from './../../UI/Button';


const NewsJumbo = () => {
  return (
    <JumboLayout
      title="Actualités"
      subtitle="Reconstruction mammaire aprés mastectomie dans le cadre de traitement contre le cancer du sein"
      image="/images/news/1.jpg"  
    >
      <a href="#articleSection">
        <Button
          title="Lire l'article"
          bgColor="bg-white"
          textColor="text-secondary"
          ringColor="ring-white"
          iconName={bsIcon.BsFileText}
          addClass=""
        />
      </a>
    </JumboLayout>
  )
}

export default NewsJumbo
