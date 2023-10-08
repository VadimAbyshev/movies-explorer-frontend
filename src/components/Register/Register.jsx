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
            <h1 className='auth__title'>Добро пожаловать!</h1>
            
        <form className='auth__form form'>
            <label className='auth__about-input'>Имя</label>
           <input
            type="text"
            id="UserName"
            name="UserName"
            className="auth__input"
            placeholder="Имя"
            required=""
            minLength="2"
            maxLength="40"
            
          />

          
          
          <label className='auth__about-input'>E-mail</label>   
          <input
            type="email"
            id="email"
            name="email"
            className="auth__input"
            placeholder="Email"
            required=""
            minLength="2"
            maxLength="40"

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
    <button className=" auth__form-submit-register hover-button decoration" type="submit">Зарегистрироваться</button>
    <p className="auth__subtitle">Уже зарегистрированы? <Link to="/signin" className='auth__subtitle-link hover-link decoration'> Войти</Link></p>
          </form>
  </section>

  )
}

