import "./header.css"
import PavelHavelka from "../../images/PavelHavelka.png"
import Navigation from "../navbar/Navigation"
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

function Header() {
  return (
    <header>
      <Navigation />

      <div className="introduce container">
        <div className="text-wrapper">
          <div className="title">
            <h1>Pavel Havelka</h1>
            <h3>- Frontend developer -</h3>
          </div>

          <div className="about-me">
            <p className="text">Ahoj, mé jméno je Pavel a pocházím z Kladna. Zajímám se o frontend technologie se zaměřením na framework React.</p>
          </div>
        </div>

        <img className="my-image" src={PavelHavelka} alt="fotka tvůrce" />

        <div className="tech-lang-wrapper">
          <div className="icons-title">
            <h3>| Tech. znalosti |</h3>
          </div>

          <div className="icons">
            <FaHtml5 className="icon html-icon" />
            <FaCss3Alt className="icon css-icon" />
            <SiJavascript className="icon js-icon" />
            <SiTypescript className="icon ts-icon" />
            <FaSass className="icon sass-icon" />
            <FaReact className="icon react-icon" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header