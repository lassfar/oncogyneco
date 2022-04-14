


const SectionLayout = ({children, title, subtitle}) => {
  return (
    <section className="container mx-auto relative w-full xl:py-14 lg:py-12 md:py-10 sm:py-8 py-8 px-6 md:px-8 lg:px-10">
      {(title || subtitle) &&
        <div className="w-full mb-10">
          {title && <h1 className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold uppercase text-secondary mb-6">{title}</h1>}
          {subtitle && <h3 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold uppercase text-secondary mb-6">{subtitle}</h3>}
          {title && <hr className="xl:w-1/12 lg:w-1/12 md:w-1/12 w-3/12 h-2 bg-secondary" />}
        </div>
      }
      {children}

      {/* <div className="flex justify-center w-full">
        <hr className="h-1 bg-primary w-1/12 mt-10 mb-4" />
      </div> */}
    </section>
  )
}

export default SectionLayout
