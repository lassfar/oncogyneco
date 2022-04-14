
import Image from 'next/image';

const JumboLayout = ({ children, title, subtitle, image }) => {
  return (
    <div className="bg-secondary w-full xl:py-14 lg:py-12 md:py-10 sm:py-8 py-8 px-6 md:px-8 lg:px-10">
      {/* TITLES SECTION */}
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="xl:w-6/12 lg:w-6/12 w-full xl:my-12 lg:my-12 md:my-8 my-4">
          <h1 className="xl:text-7xl lg:text-6xl md:text-6xl sm:text-4xl text-3xl text-white font-extrabold capitalize mb-4">
            {title}
          </h1>
          <hr className="xl:h-3 lg:h-3 md:h-2 h-1 bg-fourth w-2/12 mb-6 border-none" />
          <h3 className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl text-white font-semibold mb-4">
            {subtitle}
          </h3>
          {children}
        </div>

        {/* IMAGE SECTION */}
        <div className="relative flex xl:w-6/12 lg:w-6/12 w-full xl:my-12 lg:my-12 md:my-8 my-4">
          <img className="relative object-contain h-72 max-h-80 w-full" loading="lazy" src={image} width="100%" height="600" alt={title} />
        </div>
      </div>
      
    </div>
  )
}

export default JumboLayout
