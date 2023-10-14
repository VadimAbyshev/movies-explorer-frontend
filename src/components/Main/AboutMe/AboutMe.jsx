import "../AboutProject/AboutProject.css"
import './AboutMe.css'
import cat from '../../../images/cat.jpg'

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
        <h2 className="about-me__title about-project__title">Студент</h2>
        <div className="about-me__info">
           <div className="about-me__text">
            <h3 className="about-me__title-name">Вадим</h3>
            <h3 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h3>
            <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a  href="https://github.com/VadimAbyshev" target='_blank' className="about-me__link hover-link">GitHub</a>
            </div> 
            <img
          className="about-me__photo"
          alt="Фотография Студента"
          src={cat}
        />

        </div>
    </section>
  )
}
