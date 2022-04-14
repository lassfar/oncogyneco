const Title = ({ children, customClass }) => {
  return (
    <h2 className={`xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-bold text-secondary mb-6 ${customClass}`}>
      {children}
    </h2>
  )
}

export default Title
