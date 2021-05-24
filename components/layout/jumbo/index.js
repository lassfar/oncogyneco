

const JumboLayout = ({ children, title, subtitle, image }) => {
  return (
    <div className="w-full flex flex-wrap items-center xl:p-14 lg:p-14 md:p-10 sm:p-8 p-8 bg-secondary">
      {/* TITLES SECTION */}
      <div className="xl:w-6/12 lg:w-6/12 w-full xl:my-12 lg:my-12 md:my-8 my-4">
        <h1 className="xl:text-7xl lg:text-6xl md:text-6xl sm:text-4xl text-3xl text-white font-extrabold capitalize mb-4">
          {title}
        </h1>
        <hr className="xl:h-3 lg:h-3 h-2 bg-fourth w-2/12 mb-6 border-none" />
        <h3 className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl text-white font-semibold mb-4">
          {subtitle}
        </h3>
        {children}
      </div>

      {/* IMAGE SECTION */}
      <div className="flex xl:w-6/12 lg:w-6/12 w-full xl:my-12 lg:my-12 md:my-8 my-4">
        <img className="inline-flex object-contain max-h-96" src={image} width="100%" height="auto" />
      </div>
      
    </div>
  )
}

export default JumboLayout
