


const SectionLayout = ({children, title, subtitle}) => {
  return (
    <section className="w-full xl:p-14 lg:p-12 md:p-10 sm:p-8 p-8 my-6">
      <div className="w-full mb-10">
        {title && <h1 className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold uppercase text-secondary mb-6">{title}</h1>}
        {subtitle && <h3 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold uppercase text-secondary mb-6">{subtitle}</h3>}
        <hr className="xl:w-1/12 lg:w-1/12 md:w-1/12 w-3/12 h-2 bg-secondary" />
      </div>
      {children}

      {/* <div className="flex justify-center w-full">
        <hr className="h-1 bg-primary w-1/12 mt-10 mb-4" />
      </div> */}
    </section>
  )
}

export default SectionLayout
