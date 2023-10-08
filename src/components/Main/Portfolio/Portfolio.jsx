import { Link } from 'react-router-dom'
import strelka from '../../../images/portfolioButton.svg'
import './Portfolio.css'


export default function Portfolio() {
  return (
    <section className='portfolio page__portfolio'>
        <h2 className='portfolio__title'>Портфолио</h2>

        <nav className="portfolio__nav">

          <ul className='portfolio__lists'>

            <li className='portfolio__element'>
              <Link to={'https://github.com/VadimAbyshev'} target='_blank' className='portfolio__link hover-link'>
                <p className='portfolio__subtitle'>Статичный сайт</p>
                <img
        src={strelka}
        alt="Иконка ссылки"
        className="portfolio__button"
      />
              </Link>
            </li>

            <li className='portfolio__element'>
              <Link to={'https://github.com/VadimAbyshev'} target='_blank' className='portfolio__link hover-link'>
                <p className='portfolio__subtitle'>Адаптивный сайт</p>
                <img
        src={strelka}
        alt="Иконка ссылки"
        className="portfolio__button"
      />
              </Link>
            </li>

            <li className='portfolio__element'>
              <Link to={'https://github.com/VadimAbyshev'} target='_blank' className='portfolio__link portfolio__link_type_last hover-link'>
                <p className='portfolio__subtitle'>Одностраничное приложение</p>
              
                <img
        src={strelka}
        alt="Иконка ссылки"
        className="portfolio__button"
      />
              </Link>
              
            </li>

          </ul>

        </nav>

    </section>
  )
}