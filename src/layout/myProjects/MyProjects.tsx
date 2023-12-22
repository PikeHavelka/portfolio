import "./myProjects.css"
import VympyArt from "../../images/VympyArt.png"
import podTlakemImg from "../../images/podTlakemImg.png"
import remodelTOImg from "../../images/remodelTOImg.jpg"
import { FaEye, FaGithub } from "react-icons/fa"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"

function MyProjects() {
  return (
    <div className="my-projects container" id="me-projekty">
      <div className="title">
        <AiOutlineFundProjectionScreen className="title-icon" />
        <h3>Mé projekty</h3>
      </div>

      <div className="web-projects-wrapper">
        <div className="vympy-art-card">
          <div className="img-links">
            <img className="vympy-art-img" src={VympyArt} alt="Náhled webové stránky" />

            <div className="links-demo-code">
              <a href="http://vympyart.havelka.dev-null.xyz/">
                <FaEye className="show-web icon" />
                Demo
              </a>

              <a href="https://github.com/PikeHavelka/VympyArt">
                <FaGithub className="show-code icon" />
                Code
              </a>
            </div>
          </div>

          <div className="description">
            <h3>Vympy <span>Art</span></h3>

            <p>Zde je projekt, který si vyžádal můj kamarád. Zajímá se o grafický design.</p>

            <p>Opakují se zde obrázky a gify. Je to z důvodu nedostatku použitelného materiálu a slouží tak zatím pouze jako demonstrace.</p>

            <p>Stránka je vytvořena v nativní Javascriptu a v CSS. V blízké budoucnosti tento projekt bude vytvořen v Reactu, Typescriptu a SCSS.</p>
          </div>
        </div>

        <div className="pod-tlakem-card">
          <div className="img-links">
            <img className="pod-tlakem-img" src={podTlakemImg} alt="Náhled webové stránky" />

            <div className="links-demo-code">
              <a href="https://podtlakem.havelka.dev-null.xyz/">
                <FaEye className="show-web icon" />
                Demo
              </a>

              <a href="https://github.com/PikeHavelka/PodTlakem_0.0.1v">
                <FaGithub className="show-code icon" />
                Code
              </a>
            </div>
          </div>

          <div className="description">
            <h3>Pod-<span>Tlakem</span></h3>

            <p>Projekt opět na vyžádání přítele, který začíná podnikat a nabízí služby zaměřené na výškové práce.</p>

            <p>Zde byly použity jazyky jako jsou React, Typescript, SCSS a samozřejmě HTML.</p>
          </div>
        </div>

        <div className="remodelto">
          <div className="img-links">
            <img className="dice-game-img" src={remodelTOImg} alt="Náhled webové stránky" />

            <div className="links-demo-code">
              <a href="https://www.remodelto.cz">
                <FaEye className="show-web icon" />
                Demo
              </a>

              <a href="https://github.com/PikeHavelka/remodelTO">
                <FaGithub className="show-code icon" />
                Code
              </a>
            </div>
          </div>

          <div className="description">
            <h3>Remodel<span>TO</span></h3>

            <p>Dalším projektem je stránka pro stavební firmu. Web je zatím ve vývoji, ale už se nachází ve finální fázi.</p>

            <p>Zde byly použity také jazyky jako jsou React, Typescript, SCSS a HTML.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects