import "./myProjects.css"
import VympyArt from "../../images/VympyArt.png"
import EyE from "../../icons/icons8-show-50.png"
import GitHub from "../../icons/icons8-github-50.png"

function MyProjects() {
  return (
    <div className="my-projects container">
      <div className="title">
        <h3>Projekty</h3>
      </div>

      <div className="web-projects-wrapper">
        <div className="vympy-art-card">
          <div className="img-links">
            <img className="vympy-art-img" src={VympyArt} alt="Obrázek webové stránky" />

            <div className="links-demo-code">
              <a href="http://vympyart.havelka.dev-null.xyz/">
                <img className="show-demo icon" src={EyE} alt="Přejde na demonstraci stránky" />
                Demo
              </a>

              <a href="https://github.com/PikeHavelka/VympyArt">
                <img className="show-code icon" src={GitHub} alt="Přejde na GitHub s kódem stránky" />
                Code
              </a>
            </div>
          </div>

          <div className="description">
            <h3>Vympy <span>Art</span></h3>

            <p>Jeden z mých prvních projektů. Stránka pro mého kamaráda, který se rád zabívá grafickou kresbou.</p>

            <p>Na stránce se opakují obrázky a gify z důvodu malého množství vytvořených projektů. Opakující se obrázky slouží zatím pouze pro představu.</p>
          </div>
        </div>

        <div className="pod-tlakem-card">
          <div className="img-links">
            <img className="pod-tlakem-img" src={VympyArt} alt="Obrázek webové stránky" />

            <div className="links-demo-code">
              <a href="http://vympyart.havelka.dev-null.xyz/">
                <img className="show-demo icon" src={EyE} alt="Přejde na demonstraci stránky" />
                Demo
              </a>

              <a href="https://github.com/PikeHavelka/VympyArt">
                <img className="show-code icon" src={GitHub} alt="Přejde na GitHub s kódem stránky" />
                Code
              </a>
            </div>
          </div>

          <div className="description">
            <h3>Vympy <span>Art</span></h3>

            <p>Jeden z mých prvních projektů. Stránka pro mého kamaráda, který se rád zabívá grafickou kresbou.</p>

            <p>Na stránce se opakují obrázky a gify z důvodu malého množství vytvořených projektů. Opakující se obrázky slouží zatím pouze pro představu.</p>
          </div>
        </div>

        <div className="dice-game-card">
          <div className="img-links">
            <img className="dice-game-img" src={VympyArt} alt="Obrázek webové stránky" />

            <div className="links-demo-code">
              <a href="http://vympyart.havelka.dev-null.xyz/">
                <img className="show-demo icon" src={EyE} alt="Přejde na demonstraci stránky" />
                Demo
              </a>

              <a href="https://github.com/PikeHavelka/VympyArt">
                <img className="show-code icon" src={GitHub} alt="Přejde na GitHub s kódem stránky" />
                Code
              </a>
            </div>
          </div>

          <div className="description">
            <h3>Vympy <span>Art</span></h3>

            <p>Jeden z mých prvních projektů. Stránka pro mého kamaráda, který se rád zabívá grafickou kresbou.</p>

            <p>Na stránce se opakují obrázky a gify z důvodu malého množství vytvořených projektů. Opakující se obrázky slouží zatím pouze pro představu.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects