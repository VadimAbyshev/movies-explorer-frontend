import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './Register.css'
import { useState } from 'react';
import useFormValidation from '../../utils/useFormValidation';
import Form from '../Form/Form';
import { EmailRegex } from '../../utils/constants';
export default function Register({ onRegister, isSucess, isSend}) {

  const {value, errors, isInputValue, handleChange, isValid } = useFormValidation()


  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(value.username, value.email, value.password);
  }


  return (
    <main className="main">
    <section className = "auth auth__page">
            <Link to="/"  className='auth__logo hover-link'>
                <img
                    src={logo}
                    alt="логотип социальной сети"
                    className="auth__logo"
                />
            </Link>
            <h1 className='auth__title'>Добро пожаловать!</h1>
            
        <Form
        onSubmit={handleSubmit}
        isValid
        noValidate
        >

            <label className='auth__about-input'>Имя</label>
           <input
            type="text"
            id="username"
            name="username"
            className={`auth__input ${isInputValue.username === undefined|| isInputValue.username ? '' : 'auth__input_invalid'}`}
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            value={value.username ? value.username : ""}
          />
          <span className="auth__invalid-password auth__error-span" >{errors.username}</span>

          
          
          <label className='auth__about-input'>E-mail</label>   
          <input
            type="email"
            id="email"
            name="email"
            className={`auth__input ${isInputValue.email === undefined|| isInputValue.email ? '' : 'auth__input_invalid'}`}
            placeholder="Email"
            required=""
            minLength="2"
            maxLength="40"
            pattern={EmailRegex}

            onChange={handleChange}
            value={value.email ? value.email : ""}
          />
          <span className="auth__invalid-password auth__error-span" >{errors.email}</span>

          
          <label className='auth__about-input'>Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`auth__input ${isInputValue.password === undefined|| isInputValue.password ? '' : 'auth__input_invalid'}`}
            placeholder="Пароль"
            required
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            value={value.password ? value.password : ""}
          />
          <span className="auth__invalid-password auth__error-span" >  {errors.password}
        </span>
        <span className="auth__error-register">{isSucess}</span>
    <button className={` auth__form-submit-register hover-button decoration ${isValid ? '' : 'auth__button_disabled'}`} type="submit" disabled={!isValid || isSend} onClick={handleSubmit} >Зарегистрироваться</button>
    <p className="auth__subtitle">Уже зарегистрированы? <Link to="/signin" className='auth__subtitle-link hover-link decoration'> Войти</Link></p>
    </Form>
  </section>
  </main>

  )
}

