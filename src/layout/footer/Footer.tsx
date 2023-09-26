import "./footer.css"
import { FaGithub, FaFacebookSquare, FaMobileAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Footer() {
  return (
    <footer>
      <div className="container footer-wrapper">
        <div className="title">
          <h1>Pavel Havelka</h1>
          <h2>Portfólio</h2>
        </div>

        <div className="social-icons">
          <a href="https://github.com/PikeHavelka">
            <FaGithub className="github icon" />
          </a>

          <a href="https://www.facebook.com/PikeHavelka">
            <FaFacebookSquare className="icon" />
          </a>
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
        </div>

        <p className="text-icons" >Na této stránce byly použity ikonky ze stránky</p><a className="link-icons" target="_blank" href="https://icons8.com"> Icons8</a>
      </div>
    </footer>
  )
}

export default Footer