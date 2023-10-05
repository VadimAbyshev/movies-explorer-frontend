import { useEffect, useState } from 'react';
import './Navigation.css'
import logo from '../../images/logo.png'
import { Link, useLocation } from "react-router-dom";


export default function Navigation({ name }) {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);



  function handleClick() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  function openLink() {
    setIsOpen(false)
  }

  useEffect(() => {
    function closeBurgerForResize() {
      if (document.documentElement.clientWidth > '768') {
        setIsOpen(false)
        window.removeEventListener('resize', closeBurgerForResize)
      }
    }
    if (isOpen) {
      window.addEventListener('resize', closeBurgerForResize)
      return () => window.removeEventListener('resize', closeBurgerForResize)
    }
  }, [isOpen])






  return (
    <header className= {`header  decoration ${pathname === '/' ? 'page__header' : ''}`}>
      
      <div className='header__container'>
      <Link to="/" className='header__logo decoration hover-button'>
      <img
        src={logo}
        alt="логотип"
        className="header__logo"
      />
      </Link> 
        
   

      {name === 'home' && !loggedIn ?
        <nav>

          <div className='header__links-container header__links-container_type_home'>
            
              <Link to={'/sign-up'} className="header__signup decoration hover-link">Регистрация</Link>
            
           
              <Link to={'/sign-in'} className="header__signin decoration hover-link">Войти</Link>
           
          </div>

        </nav>


        :


        <>
          <nav className={`header__nav ${isOpen ? 'header__nav_open' : ''}`}>
          <button type='button' className='header__burger-close decoration hover-button' onClick={handleClick}></button>
            <div className='header__links-container header__links-container_type_page'>
              
            <div className='header__link-containe header__link-container_type_home'>
                <Link
                  to={'/'}
                  className={`header__link decoration ${pathname === '/' ? 'header__link_active' : ''}`}
                  onClick={openLink}
                >Главная</Link>
              </div>

              <div className='header__link-container'>
                <Link
                  to={'/movies'}
                  className={`header__link decoration ${pathname === '/movies' ? 'header__link_active' : ''}`}
                  onClick={openLink}
                >Фильмы</Link>
              </div>


              <div className='header__link-container'>
                <Link
                  to={'/saved-movies'}
                  className={`header__link decoration ${pathname === '/saved-movies' ? 'header__link_active' : ''}`}
                  onClick={openLink}
                >Сохранённые фильмы
                </Link>
              </div>

              <div className='header__link-container'>
                <Link
                  to={'/profile'}
                  className={`header__link decoration header__profile-icon header__link_type_profile ${pathname === '/profile' ? 'header__link_active' : ''}`}
                  onClick={openLink}
                >
                </Link>
              </div>

            </div>

            
          </nav>
          <button type='button' className='header__burger decoration hover-button' onClick={handleClick}></button>
        </>
      }

    </div>
    </header>
  )
}