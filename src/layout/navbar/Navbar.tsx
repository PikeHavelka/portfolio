import "./navbar.css"
import Theme from "../../components/theme/Theme"

function Navigation() {
  return (
    <nav>
      <ul className="container">
        <li><a href="">Portfólio</a></li>
        <li><a href="">Úvod</a></li>
        <li><a href="">O mně</a></li>
        <li><a href="">Projekty</a></li>
        <li><a href="">Kontakt</a></li>
      </ul>

      <Theme />
    </nav>
  )
}

export default Navigation