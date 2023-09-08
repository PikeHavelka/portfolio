import "./navigation.css"
import { FaRegMoon } from 'react-icons/fa'

function Navigation() {
  return (
    <nav>
      <ul className="container">
        <li><a href="">Portfólio</a></li>
        <li><a href="">Úvod</a></li>
        <li><a href="">O mně</a></li>
        <li><a href="">Projekty</a></li>
        <li><a href="">Kontakt</a></li>
        <li><FaRegMoon /></li>
      </ul>
    </nav>
  )
}

export default Navigation