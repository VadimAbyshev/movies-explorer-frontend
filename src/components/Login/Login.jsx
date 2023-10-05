import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './Login.css'


export default function Register() {
  return (

    <section className = "auth auth__page">
            <Link to="/" className='auth__logo'>
                <img
                    src={logo}
                    alt="логотип социальной сети"
                    className="auth__logo"
                />
            </Link>
            <h2 className='auth__title'>Рады видеть!</h2>
            
        <form
           action="#"
        className='auth__form form'>

          <span className='auth__about-input'>Email</span>   
          <input
            type="email"
            id="email"
            name="email"
            className="auth__input"
            placeholder="Email"
            required=""
            minlength="2"
            maxlength="40"

          />

          
          <span className='auth__about-input'>Пароль</span>
          <input
            type="password"
            id="password"
            name="password"
            className="auth__input"
            placeholder="Пароль"
            required=""
            minlength="2"
            maxlength="40"
          />
    <button className="auth__form-submit-button auth__form-submit-login hover-button decoration" type="submit">Войти</button>
    <p className="auth__subtitle ">Ещё не зарегистрированы?<Link to="/sign-up" className='auth__subtitle-link hover-link decoration'> Регистрация</Link></p>
          </form>
  </section>

  )
}