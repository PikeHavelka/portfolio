import "./navbar.css"
import Theme from "../../components/theme/Theme"
import { AiFillHome } from "react-icons/ai"
import { useState } from "react"

function Navigation() {
  const [showHide, setShowHide] = useState(false)

  window.addEventListener("load", function () {
    // Check if there's an anchor in the URL
    if (window.location.hash) {
      // Remove the anchor from the URL
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  })

  const hamburgerMenu = () => {
    setShowHide(!showHide)
  }

  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="" className="home">
          <AiFillHome className="icon" />
        </a>

        <ul className={showHide ? "show-nav" : "hide-nav"}>
          <li><a href="#uvod">Úvod</a></li>
          <li><a href="#o-mne">O mně</a></li>
          <li><a href="#me-projekty">Projekty</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
          <li><Theme /></li>
        </ul>
        
        <button className={`hamburger-menu ${showHide ? "cross-burger" : "normal-burger"}`} onClick={hamburgerMenu}>
          <div className="top line"></div>
          <div className="middle line"></div>
          <div className="bottom line"></div>
        </button>
      </div>
    </nav>
  )
}

export default Navigation