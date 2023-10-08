import { Link } from "react-router-dom";
import "./Profile.css";
import { useState } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
export default function Profile() {

  const disabled = true;

  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false);
  
  function makeButtonVisible() {
    setIsVisibleSubmit(true);
  }

  function makeButtonInvisible() {
    setIsVisibleSubmit(false);
  }

  return (
    <><Navigation/>
    <section className="profile">

    <h1 className="profile__title">Привет, Виталий!</h1>

    <div className="profile__container">
      
      <div className="profile__container-info">
        <label className="profile__info-text">Имя</label>
        <input
          className="profile__info-text"
          type="text"
          placeholder="Вадим"
          minLength="2"
          maxLength="40"
        />
      </div>

      
      <div className="profile__container-info">
        <label className="profile__info-text  profile__info-text_last ">E-mail</label>
        <input
          className="profile__info-text profile__info-text_last"
          type="text"
          placeholder="admin@admin.ru"
          minLength="2"
          maxLength="40"
        />
      </div>

    </div>

    {isVisibleSubmit ? (
      <button type="submit" className={`${disabled ? "profile__button-save hover-button decoration" : "profile__button-save_disabled"}`} onClick={makeButtonInvisible}>
        Сохранить
      </button>
    ) : (
      <>
      <button type="submit" className="profile__button-edit decoration hover-button" onClick={makeButtonVisible}>
      Редактировать
      </button>
        <Link to="/" className="profile__link-exit hover-button decoration">
          Выйти из аккаунта
        </Link>
      </>
    )}
  </section>
  </>
  );
}