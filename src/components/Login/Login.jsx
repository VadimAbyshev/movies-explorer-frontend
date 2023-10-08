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
            <h1 className='auth__title'>Рады видеть!</h1>
            
        <form
           action="#"
        className='auth__form form'>

          <label className='auth__about-input'>E-mail</label>   
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

          
          <label className='auth__about-input'>Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            className="auth__input"
            placeholder="Пароль"
            required=""
            minLength="2"
            maxLength="40"
          />
    <button className="auth__form-submit-button auth__form-submit-login hover-button " type="submit">Войти</button>
    <p className="auth__subtitle ">Ещё не зарегистрированы?<Link to="/signup" className='auth__subtitle-link hover-link '> Регистрация</Link></p>
          </form>
  </section>

  )
}