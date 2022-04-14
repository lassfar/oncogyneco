const Subtitle = ({ children, customClass }) => {
  return (
    <div className={`xl:text-2xl lg:text-2xl md:text-xl text-lg font-semibold mb-4 ${customClass || 'text-primary'}`}>
      {children}
    </div>
  )
}

export default Subtitle
