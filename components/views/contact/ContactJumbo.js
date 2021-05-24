
import JumboLayout from './../../layout/jumbo/index';
import Button from './../../UI/Button';
import * as cgIcon from 'react-icons/cg'


const ContactJumbo = () => {
  return (
    <JumboLayout title="Contactez-Nous" subtitle="Besoin d'Assistance ?" image="/images/design/10-2.png">
      <a href="#contactFormSection">
        <Button
          title="Envoyez un Message"
          bgColor="bg-white"
          textColor="text-secondary"
          ringColor="ring-white"
          iconName={cgIcon.CgMail}
          addClass="mt-auto"
        />
      </a>
    </JumboLayout>
  )
}

export default ContactJumbo
