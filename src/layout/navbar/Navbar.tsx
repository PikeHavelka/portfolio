import "./navbar.css"
import Theme from "../../components/theme/Theme"

function Navigation() {
  window.addEventListener("load", function () {
    // Check if there's an anchor in the URL
    if (window.location.hash) {
      // Remove the anchor from the URL
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  })

  return (
    <nav>
      <ul className="container">
        <li><a href="">Portfólio</a></li>
        <li><a href="#uvod">Úvod</a></li>
        <li><a href="#o-mne">O mně</a></li>
        <li><a href="#me-projekty">Projekty</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
        <li><Theme /></li>
      </ul>
    </nav>
  )
}

export default Navigation