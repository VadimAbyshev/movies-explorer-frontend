import "../AboutProject/AboutProject.css"
import "./Techs.css"

export default function Techs() {
  return (
    <section className="techs-project" id="techs">
        <h2 className="techs-project__title about-project__title">Технологии</h2>
        <div className="techs-project__info">
            <h3 className="techs-project__tech-title">7 технологии</h3>
            <p className="techs-project__tech-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className="techs-project__list">
            <li className="techs-project__list-element">HTML</li>
            <li className="techs-project__list-element">CSS</li>
            <li className="techs-project__list-element">JS</li>
            <li className="techs-project__list-element">React</li>
            <li className="techs-project__list-element">Git</li>
            <li className="techs-project__list-element">Express.js</li>
            <li className="techs-project__list-element">mongoDB</li>
        </ul>
    </section>
  )
}
