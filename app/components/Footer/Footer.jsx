import Contacts from './Contacts'
import SocialFooter from './SocialFooter'
import Copyright from './Copyright'

export default function Footer() {
  return (
    <footer className='bg-footer text-text py-8'>
      <Contacts />
      <SocialFooter />
      <Copyright />
    </footer>
  )
}
