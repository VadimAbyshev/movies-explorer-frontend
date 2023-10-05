import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './Register.css'


export default function Register() {
  return (

    <section className = "auth auth__page">
            <Link to="/"  className='auth__logo'>
                <img
                    src={logo}
                    alt="логотип социальной сети"
                    className="auth__logo"
                />
            </Link>
            <h2 className='auth__title'>Добро пожаловать!</h2>
            
        <form className='auth__form form'>
            <span className='auth__about-input'>Имя</span>
           <input
            type="nameUser"
            id="nameUser"
            name="nameUser"
            className="auth__input"
            placeholder="Имя"
            required=""
            minlength="2"
            maxlength="40"
            
          />

          
          
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
    <button className=" auth__form-submit-register hover-button decoration" type="submit">Зарегистрироваться</button>
    <p className="auth__subtitle">Уже зарегистрированы? <Link to="/sign-in" className='auth__subtitle-link hover-link decoration'> Войти</Link></p>
          </form>
  </section>

  )
}

