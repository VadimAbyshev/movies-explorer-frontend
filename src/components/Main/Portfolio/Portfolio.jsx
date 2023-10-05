import { Link } from 'react-router-dom'
import './Portfolio.css'


export default function Portfolio() {
  return (
    <section className='portfolio page__portfolio'>
        <h2 className='portfolio__title'>Портфолио</h2>

        <nav className="portfolio__nav">

          <ul className='portfolio__lists'>

            <li className='portfolio__element'>
              <Link to={'https://github.com/VadimAbyshev'} target='_blank' className='portfolio__link decoration'>
                <p className='portfolio__subtitle'>Статичный сайт</p>
                <button type='button' className='portfolio__button'></button>
              </Link>
            </li>

            <li className='portfolio__element'>
              <Link to={'https://github.com/VadimAbyshev'} target='_blank' className='portfolio__link decoration'>
                <p className='portfolio__subtitle'>Адаптивный сайт</p>
                <button type='button' className='portfolio__button'></button>
              </Link>
            </li>

            <li className='portfolio__element'>
              <Link to={'https://github.com/VadimAbyshev'} target='_blank' className='portfolio__link portfolio__link_type_last decoration'>
                <p className='portfolio__subtitle'>Одностраничное приложение</p>
                <button type='button' className='portfolio__button'></button>
              </Link>
            </li>

          </ul>

        </nav>

    </section>
  )
}