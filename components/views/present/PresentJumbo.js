


const PresentJumbo = () => {
  return (
    <div className="w-full flex flex-wrap items-center xl:p-14 lg:p-14 md:p-10 sm:p-8 p-8 bg-secondary">
      {/* TITLES SECTION */}
      <div className="xl:w-6/12 lg:w-6/12 w-full xl:my-12 lg:my-12 md:my-8 my-4">
        <h1 className="xl:text-7xl lg:text-6xl md:text-6xl sm:text-4xl text-3xl text-white font-extrabold capitalize mb-4">
          <span className="xl:text-8xl lg:text-7xl md:text-7xl sm:text-5xl text-4xl text-primary">Qui</span><br />
          <span>somme-nous ?</span></h1>
        <hr className="h-3 bg-fourth w-2/12 mb-6" />
        <h3 className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl text-white font-semibold">Présentation du centre Mohammed VI</h3>
      </div>

      {/* IMAGE SECTION */}
      <div className="flex xl:w-6/12 lg:w-6/12 w-full xl:my-12 lg:my-12 md:my-8 my-4">
        <img className="inline-flex object-contain" src="/images/design/6.png" width="100%" height="auto" />
      </div>
      
    </div>
  )
}

export default PresentJumbo
