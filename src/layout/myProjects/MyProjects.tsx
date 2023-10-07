import "./myProjects.css"
import VympyArt from "../../images/VympyArt.png"
import podTlakemImg from "../../images/podTlakemImg.png"
import diceGameImg from "../../images/diceGameImg.png"
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

        <div className="dice-game-card">
          <div className="img-links">
            <img className="dice-game-img" src={diceGameImg} alt="Náhled webové stránky" />

            <div className="links-demo-code">
              <a href="https://dicegame.havelka.dev-null.xyz/">
                <FaEye className="show-web icon" />
                Demo
              </a>

              <a href="https://github.com/PikeHavelka/DiceGame">
                <FaGithub className="show-code icon" />
                Code
              </a>
            </div>
          </div>

          <div className="description">
            <h3>Dice<span>Game</span></h3>

            <p>Dice Game je hra, která byla vytvořena pouze pro zábavu. Jedná se o hru ve webovém prohlížeči pro dva hráče.</p>

            <p>V jejím kódu se nachází klasický Javascript, Typescript, CSS a HTML.</p>

            <p><span>NÁVOD:</span> Hra začíná tahem hráče jedna (vlevo). Hráč 1 začíná tak, že klikne na políčko hodit kostkou. Ve čtverci se začně "otáčet" kostka a její výsledek se přičte do současného skóre. Hráč 1 může stále pokračovat v hodu kostkou do té doby, dokud nepodrží skóre nebo nehodí hodnotu 1. To se poté přičte k celkovému skóre a nemůže tak o své body přijít. Padne-li hodnota 1 dříve než skóre podrží, o body hráč přichází a je na řadě hráč 2.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects