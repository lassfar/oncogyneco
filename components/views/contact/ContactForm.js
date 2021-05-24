
const ContactForm = () => {
  return (
    <form className="relative flex flex-col bg-white shadow-lg rounded-3xl p-6" id="contactForm">
      <div className="w-full mb-4">
        <label htmlFor="fullName" className="mb-4 text-gray-600">Nom et Prénom</label>
        <input type="text" id="fullName" name="fullname" className="w-full shadow rounded-md focus:shadow-md px-6 py-3" autoComplete="off" placeholder="Nom et Prénom" />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="fullName" className="mb-4 text-gray-600">Adresse Email</label>
        <input type="text" id="email" name="email" className="w-full shadow rounded-md focus:shadow-md px-6 py-3" autoComplete="off" placeholder="Adresse Email" />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="fullName" className="mb-4 text-gray-600">Numéro du Téléphone</label>
        <input type="text" id="fullName" name="fullname" className="w-full shadow rounded-md focus:shadow-md px-6 py-3" autoComplete="off" placeholder="Téléphone" />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="fullName" className="mb-4 text-gray-600">Objet</label>
        <input type="text" id="object" name="object" className="w-full shadow rounded-md focus:shadow-md px-6 py-3" autoComplete="off" placeholder="Objet" />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="fullName" className="mb-4 text-gray-600">Message</label>
        <textarea rows="6" id="message" name="message" className="w-full shadow rounded-md focus:shadow-md px-6 py-3 outline-none" autoComplete="off" placeholder="Message" />
      </div>
      {/* <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div> */}
    </form>
  )
}

export default ContactForm
