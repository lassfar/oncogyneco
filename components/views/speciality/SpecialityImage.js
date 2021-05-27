

const SpecialityImage = ({ imageSrc }) => {
  return (
    <div className="relative flex justify-end xl:w-4/12 lg:w-4/12 md:w-5/12 w-full max-h-screen mx-auto xl:my-16 lg:my-14 md:my-24 my-20">
      {/* <div className=""> */}
        <img src={imageSrc} className="z-50 object-cover relative w-full h-full rounded-3xl shadow-lg" alt="" />
        <div className="z-30 absolute top-0 left-0 transform skew-y-6 -skew-x-6 bg-primary bg-opacity-40 w-full h-full rounded-3xl shadow-lg">
          {/* BG EFFECT */}
        </div>
        <div className="z-30 absolute top-0 left-0 transform skew-y-12 -skew-x-12 bg-secondary bg-opacity-40 w-full h-full rounded-3xl shadow-lg">
          {/* BG EFFECT */}
        </div>
      {/* </div> */}
    </div>
  )
}

export default SpecialityImage
