import whatsappIcon from '../../assets/icons/whatsapp.png';
import emailIcon from '../../assets/icons/email.png';
import messengerIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instagramIcon from '../../assets/icons/instagram.png'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`text-center bg-dark text-light p-5 ${styles.Footer}`}>
        <div>
            <p>Copyright&copy; {new Date().getFullYear()} SinaArtz</p>
            <p>All rights reserved</p>
        </div>
        <div className={`${styles.SocialIconsDiv}`}>
            <a href='https://whatsapp.com'><img src={emailIcon} alt='connect with SinaArtz on whatsapp'/></a>
            <a href='https://whatsapp.com'><img src={whatsappIcon} alt='connect with SinaArtz on whatsapp'/></a>
            <a href='https://whatsapp.com'><img src={messengerIcon} alt='connect with SinaArtz on whatsapp'/></a>
            <a href='https://whatsapp.com'><img src={twitterIcon} alt='connect with SinaArtz on whatsapp'/></a>
            <a href='https://whatsapp.com'><img src={instagramIcon} alt='connect with SinaArtz on whatsapp'/></a>
        </div>
    </footer>
  )
}

export default Footer