import "./aboutMe.css"
import { RiFolderInfoFill } from "react-icons/ri";

function AboutMe() {
  return (
    <section className="about-me-section" id="o-mne">
      <div className="container">
        <div className="heading">
          <RiFolderInfoFill className="info icon" />
          <h2>O mně</h2>
        </div>

        <article className="text-container">
          <div className="text grid-box-1">
            <h3>Jak dlouho?</h3>

            <p>Necelé <strong>dva roky</strong> se zajímám o <strong>frontend</strong> vývoj. Rád této tématice <strong>věnuji</strong> svůj <strong>volný čas</strong> a <strong> dobrovolně se vzdělávám</strong>.</p>
          </div>

          <div className="text grid-box-2">
            <h3>Jaké jazyky/programy ke svém práci využívám?</h3>

            <p>Využívám jazyky jako jsou <strong>HTML</strong>, <strong>CSS</strong>, <strong>SASS</strong>, <strong>Javascript</strong>, <strong>Typescript</strong> a <strong>React</strong>, vyjímečně <strong>Tailwind</strong>. Kód píši ve <strong>Visual Studio Code</strong> a obrázky generuji pomocí <strong>AI</strong>. Používám základní funkce verzovacího systému<strong>Git</strong> a pokud se jedná o velmi jednoduchou úpravu fotek, využívám <strong>Photoshop</strong>.</p>
          </div>


          <div className="text grid-box-3">
            <h3>Jak píši kód?</h3>

            <p>Při své práci se snažím stránky co nejvíce optimalizovat a zajistit podporu i pro starší verze prohlížečů. Vytvořím responzivitu webu a základní optimalizaci pro <strong>SEO</strong>.</p>
          </div>

          <div className="text grid-box-4">
            <h3>Jak se vzdělávám?</h3>

            <p>Pravidelně každý den mám vyhrazený čas pro práci s kódem. Věnuji se některým úlohám na stránce <a href="https://leetcode.com/problemset/">LeetCode</a>. Vytvářím weby pro své blízké nebo pracuji na vlastních mini projektech. Také probírám některá témata se svým učitelem.</p>

            <p>V rozvoji svých zkušeností se plánuji nadále zdokonalovat. Rád bych šel ve studii více do hloubky a naučil se s dalšími jazyky i programy.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutMe