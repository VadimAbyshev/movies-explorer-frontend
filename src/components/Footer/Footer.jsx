import './Footer.css'
import { Link, useLocation } from 'react-router-dom'


export default function Footer() {



  return (
    <footer className={`footer page__footer `}>
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>

      <div className="footer__container">

        <p className="footer__subtitle">© 2023</p>
        <ul className="footer__nav">
         <li className='footer__nav-element'><Link to={'https://practicum.yandex.ru/'} target='_blank' className="footer__link decoration">Яндекс.Практикум</Link></li>
         <li className='footer__nav-element'><Link to={'https://github.com/VadimAbyshev'} target='_blank' className="footer__link decoration">Github</Link></li>
        </ul>
      </div>


    </footer>
  )
}