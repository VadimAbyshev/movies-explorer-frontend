import './Footer.css'
import { Link, useLocation } from 'react-router-dom'


export default function Footer() {



  return (
    <footer className={`footer page__footer `}>
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>

      <div className="footer__container">

        <p className="footer__subtitle">© 2023</p>
        <nav className="footer__nav">
          <Link to={'https://practicum.yandex.ru/'} target='_blank' className="footer__link decoration">Яндекс.Практикум</Link>
          <Link to={'https://github.com/VadimAbyshev'} target='_blank' className="footer__link decoration">Github</Link>
        </nav>
      </div>


    </footer>
  )
}