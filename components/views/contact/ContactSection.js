import GoogleMapIframe from "../../map/GoogleMapIframe"
import DynamicIcon from "../../UI/DynamicIcon"
import ContactForm from "./ContactForm"
import * as cgIcon from 'react-icons/cg'
import * as hiIcon from 'react-icons/hi'

const ContactSection = () => {
  return (
    <div className="flex flex-row flex-wrap xl:p-14 lg:p-14 md:p-10 sm:p-8 p-8">
      {/* GOOGLE MAP */}
      <div className="relative xl:w-6/12 lg:w-6/12 md:w-6/12 w-full my-4">
        <h2 className="xl:text-3xl lg:text-2xl md:text-2xl text-xl text-secondary font-bold mb-4">Notre Localisation</h2>
        <GoogleMapIframe addClass="w-full h-96 border-8 border-fourth border-opacity-50 rounded-3xl shadow-lg z-20" />
        <div className="w-full p-6 bg-white shadow-lg rounded-3xl my-8">
          <h2 className="xl:text-3xl lg:text-2xl md:text-2xl text-xl text-secondary font-bold mb-6">
            Informations de Contact
          </h2>
          <a href="tel:0600000060" className="flex items-center my-4">
            <DynamicIcon iconName={cgIcon.CgPhone} iconClass="mr-4" />
            <span>+(212) 6-00 00 00 60</span>
          </a>
          <a href="mailto:oncogyneco.chucasa@gmail.com" className="flex items-center my-4">
            <DynamicIcon iconName={cgIcon.CgMail} iconClass="mr-4" />
            <span>oncogyneco.chucasa@gmail.com</span>
          </a>
          <a href="https://www.google.com/maps/place/University+Hospital+Center+Ibn+Rochd+-+Casablanca/@33.579503,-7.621112,14z/data=!4m9!1m2!2m1!1sCentre+Hospitalier+Universitaire+Ibn+Rochd+-+Casablanca!3m5!1s0xda7cd48273dd637:0xa82eac514540569f!8m2!3d33.581258!4d-7.6197661!15sCjdDZW50cmUgSG9zcGl0YWxpZXIgVW5pdmVyc2l0YWlyZSBJYm4gUm9jaGQgLSBDYXNhYmxhbmNhkgEIaG9zcGl0YWw" className="flex items-center my-4">
            <DynamicIcon iconName={hiIcon.HiLocationMarker} iconClass="mr-4" />
            <span>Centre Hospitalier Universitaire Ibn Rochd - Casablanca</span>
          </a>

        </div>
      </div>

      {/* SPACE */}
      <div className="xl:w-1/12 lg:w-1/12 md:w-1/12 xl:flex lg:flex md:flex hidden"></div>

      {/* CONTACT FORM */}
      <div className="relative xl:w-5/12 lg:w-5/12 md:w-5/12 w-full my-4" id="contactFormSection">
        {/* BG DESIGN */}
        <div className="absolute top-8 left-0 bg-primary bg-opacity-10 transform -rotate-6 w-full h-full rounded-3xl"></div>
        {/* CONTACT FORM */}
        <h2 className="xl:text-3xl lg:text-2xl md:text-2xl text-xl text-secondary font-bold mb-4">
          Envoyez un message
        </h2>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactSection
