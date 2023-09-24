import "./myProjects.css"
import VympyArt from "../../images/VympyArt.png"
import EyE from "../../icons/icons8-show-50.png"
import GitHub from "../../icons/icons8-github-50.png"

function MyProjects() {
  return (
    <div className="my-projects">
        <div className="web-projects-wrapper">
          <div className="title">
            <h3>Mé projekty je možné vidět živě zde.</h3>
          </div>

          <div className="web-projects">
            <div className="vympy-art-bg">
              <div className="vympy-art container">
                <div className="iframe-wrapper">
                  <img src={VympyArt} alt="Obrázek webové stránky" />

                  <div className="links">
                    <a href="https://pike.dev-null.xyz/">
                      <img className="show-demo" src={EyE} alt="Ikonka oka" />
                      Demo
                    </a>

                    <a href="https://github.com/PikeHavelka/VympyArt">
                      <img className="show-code" src={GitHub} alt="Ikonka GitHub" />
                      Code
                    </a>
                  </div>
                </div>

                <div className="description">
                  <h3>Vympy <span>Art</span></h3>

                  <p>Jeden z mých prvních projektů. Stránka pro mého kamaráda, který se rád zabívá grafickou kresbou.</p>

                  <p>Na stránce se opakují obrázky a gify z důvodu malého množství vytvořených projektů. Opakující se obrázky slouží zatím pouze pro představu.</p>

                  <div className="color-squares">
                    <div className="square-1"></div>
                  </div>
                </div>
              </div>
            </div>

          <div className="pod-tlakem-bg">
            <div className="pod-tlakem container">
              <div className="iframe-wrapper">
                <img src={VympyArt} alt="Obrázek webové stránky" />

                <div className="links">
                    <a href="https://pike.dev-null.xyz/">
                      <img className="show-demo" src={EyE} alt="Ikonka oka" />
                      Demo
                    </a>

                    <a href="https://github.com/PikeHavelka/VympyArt">
                      <img className="show-code" src={GitHub} alt="Ikonka GitHub" />
                      Code
                    </a>
                  </div>
              </div>

              <div className="description">
                <h3><span>Pod-</span>Tlakem</h3>

                <p>Opět webové stránky, které jsou vytvořeny pro blízkého přítele.</p>

                <p>Začínající podnikatel, který chtěl o své nové firmě dát vědět a zajistit si komunikaci s klienty.</p>

                <div className="color-squares">
                  <div className="square-2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="dice-game-bg">
            <div className="dice-game container">
              <div className="iframe-wrapper">
                <img src={VympyArt} alt="Obrázek webové stránky" />

                <div className="links">
                    <a href="https://pike.dev-null.xyz/">
                      <img className="show-demo" src={EyE} alt="Ikonka oka" />
                      Demo
                    </a>

                    <a href="https://github.com/PikeHavelka/VympyArt">
                      <img className="show-code" src={GitHub} alt="Ikonka GitHub" />
                      Code
                    </a>
                  </div>
              </div>

              <div className="description">
                <h3>Vympy <span>Art</span></h3>

                <p>Jeden z mých prvních projektů. Stránka pro mého kamaráda, který se rád zabívá grafickou kresbou.</p>

                <p>Na stránce se opakují obrázky a gify z důvodu malého množství vytvořených projektů. Opakující se obrázky slouží zatím pouze pro představu.</p>

                <div className="color-squares">
                  <div className="square-3"></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default MyProjects