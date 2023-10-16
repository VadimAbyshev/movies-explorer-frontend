import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './Login.css'
import { useContext, useState } from 'react';
import useFormValidation from '../../utils/useFormValidation';
import Form from '../Form/Form';
import ErrorContext from '../../contexts/ErrorContext'
import { EmailRegex } from '../../utils/constants';
export default function Login({ onLogin, isSucess}) {


  const isError = useContext(ErrorContext)

  const {value, errors, isInputValue, handleChange, isValid } = useFormValidation()
  

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(value.email, value.password);
  }

  return (
    <main className="main">
    <section className = "auth auth__page">
            <Link to="/" className='auth__logo hover-link'>
                <img
                    src={logo}
                    alt="логотип социальной сети"
                    className="auth__logo"
                />
            </Link>
            <h1 className='auth__title'>Рады видеть!</h1>
            
      <Form
      isValid = {isValid}
      noValidate
      onChange = {handleSubmit}
      >

          <label className='auth__about-input'>E-mail</label>   
          <input
            type="email"
            id="email"
            name="email"
            className={`auth__input ${isInputValue.email === undefined|| isInputValue.email ? '' : 'auth__input_invalid'}`}
            placeholder="Email"
            required
            pattern={EmailRegex}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            value={value.email ? value.email : ""}
            
          />
          <span className="auth__invalid-email auth__error-span" >{errors.email}</span>
          
          <label className='auth__about-input'>Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`auth__input ${isInputValue.password === undefined|| isInputValue.password ? '' : 'auth__input_invalid'}`}
            placeholder="Пароль"
            required
            minLength="3"
            maxLength="40"
            onChange={handleChange}
            value={value.password ? value.password : ""}
          />
          <span className="auth__invalid-password auth__error-span" >
               {errors.password}
        </span>
        <span className="auth__error">{isSucess}</span>
    <button className={`auth__form-submit-button auth__form-submit-login hover-button  ${isValid ? '' : 'auth__button_disabled'}`} type="submit" disabled={!isValid} onClick={handleSubmit}>Войти</button>
    <p className="auth__subtitle ">Ещё не зарегистрированы?<Link to="/signup" className='auth__subtitle-link hover-link '> Регистрация</Link></p>
    </Form>
  </section>
</main>
  )
}