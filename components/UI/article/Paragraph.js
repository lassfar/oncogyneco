const Paragraph = ({ children, addClass, margins }) => {
  return (
    <p className={`text-justify ${addClass} ${margins || 'xl:mb-6 mb-4'}`}>
      {children}
    </p>
  )
}

export default Paragraph
