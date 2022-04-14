
import JumboLayout from './../../layout/jumbo/index';


const PresentJumbo = () => {
  return (
    
    <JumboLayout
      title={
        <>
          <span className="xl:text-8xl lg:text-7xl md:text-7xl sm:text-5xl text-4xl text-primary pt-6 block">Qui</span>
          <span>somme-nous ?</span>
        </>
      }
      subtitle="Présentation du centre Mohammed VI"
      image="/images/design/6.png"  
    >
    </JumboLayout>
  )
}

export default PresentJumbo
