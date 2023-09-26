import "./footer.css"


function Footer() {
  return (
    <footer>
      <div className="title">
        <h1>Pavel Havelka</h1>
        <h2>Portfólio</h2>
      </div>

      <div className="icons">
        <a href="https://github.com/PikeHavelka">

        </a>

        <a href="https://www.facebook.com/PikeHavelka">

        </a>
      </div>

      <span>Email:
        <a href="mailto:havelka.pvl@seznam.cz">havelka.pvl@seznam.cz</a>
      </span>

      <span>Mobil:
        <a href="tel:732162568">732 162 568</a>
      </span>
      
      <p>Na stránce byly použity ikony od</p><a target="_blank" href="https://icons8.com">Icons8</a>
    </footer>
  )
}

export default Footer