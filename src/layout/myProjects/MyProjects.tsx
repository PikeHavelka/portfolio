import "./myProjects.css"
import VympyArt from "../../images/VympyArt.png"
import podTlakemImg from "../../images/podTlakemImg.png"
import remodelTOImg from "../../images/remodelTOImg.png"
import NoPhoto from "../../images/NoPhoto.jpg"
import { FaEye, FaGithub } from "react-icons/fa"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"

function MyProjects() {
  return (
    <article className="my-projects" id="me-projekty">
      <div className="container">

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

              <p>Jeden z mých prvních projektů pro jednoho nadšence zajímající se o kresby a design.</p>

              <p>Opakující se obrázky a gify na této stránce zatím slouží pouze jako demontrace z důvodu nedostatku materiálu.</p>

              <p>Při větším množství materiálu bude stránka uveřejněna se svojí vlastní doménou.</p>
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

              <p>Projekt pro zblízkého přítele, který se rozhodl začít podnikat. Web je zaměřen na výškové práce.</p>

              <p>Stránka bohužel nikdy nebude mít vlastní doménu a zůstane pouze zde, jako ukázka mé práce.</p>
            </div>
          </div>

          <div className="remodelto">
            <div className="img-links">
              <img className="remodelto-img" src={remodelTOImg} alt="Náhled webové stránky" />

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
              <h3>Remodel<span>To</span></h3>

              <p>Dalším a zatím největším projektem je stránka RemodelTo, pro stavební firmu působící v Praze.</p>

              <p>Stránka byla navržena pro majitele firmy pana Otradovce a následně upravována podle jeho představ. Web je v plném chodu a veřejnosti přístupný.</p>
            </div>
          </div>

          <div className="zlute-leseni">
            <div className="img-links">
              <img className="zlute-leseni-img" src={NoPhoto} alt="Náhled webové stránky" />

              <div className="links-demo-code">
                <a href="https://www.zlute-leseni.havelka.dev-null.xyz">
                  <FaEye className="show-web icon" />
                  Demo
                </a>

                <a href="https://github.com/PikeHavelka/zlute_leseni">
                  <FaGithub className="show-code icon" />
                  Code
                </a>
              </div>
            </div>

            <div className="description">
              <h3>Žluté-<span>lešení</span></h3>

              <p>Momentální projekt zahrnuje web pro majitele stavební firmy RemodelTo. Byl jsem znovu požádán o vytvoření jednoduché stránky sloužící k pronájmu lešení.</p>

              <p>Projekt je teprve ve vývoji a záleží, co vše bude pan majitel chtít na web vložit.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default MyProjects