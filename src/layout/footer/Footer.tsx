import "./footer.css"
import { FaGithub, FaFacebookSquare, FaMobileAlt, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Footer() {
  return (
    <footer id="kontakt">
      <div className="container footer-wrapper">
        <div className="title">
          <h1>Pavel Havelka</h1>
        </div>

        <div className="contact">
          <span className="contact-email">
            <MdEmail className="icon" /> Email:
            <a href="mailto:havelka.pvl@seznam.cz"> havelka.pvl@seznam.cz</a>
          </span>

          <span className="contact-mobile">
            <FaMobileAlt className="icon" /> Mobil:
            <a href="tel:732162568"> 732 162 568</a>
          </span>    

          <span className="contact-mobile">
          <FaLinkedin className="icon" /> LNKD:
            <a href="https://www.linkedin.com/in/pavel-havelka-2ba577299/"> LinkedIn</a>
          </span>   
        </div>

        <p className="text-icons" >Na této stránce byly použity ikonky od autora</p><a className="link-icons" target="_blank" href="https://icons8.com"> Icons8</a>
      </div>
    </footer>
  )
}

export default Footer