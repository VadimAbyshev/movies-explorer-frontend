import { Link } from "react-router-dom";
import "./Profile.css";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormValidation from "../../utils/useFormValidation";
import FormProfile from "../FormProfile/FormProfile";

export default function Profile({ logOut, isSucces, editUserData, isEditProfile, setEditProfile}) {
  const disabled = true;
  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false);
 
  const currentUser = useContext(CurrentUserContext)
  const { value, errors, isInputValue, isValid, handleChange, reset, setValues, setIsValid } = useFormValidation()


  useEffect(() => {
    setValues('name', currentUser.user)
    setValues('email', currentUser.email)
  },[currentUser, setValues])

  
  function handleSubmit(evt) {
    evt.preventDefault();
    editUserData(value.username, value.email, reset)
    setIsValid(false)
  }
  function makeButtonInVisible(evt){
    evt.preventDefault();
    setIsVisibleSubmit(false);
  }

  function makeButtonVisible(evt) {
    evt.preventDefault();
    setIsVisibleSubmit(true);
  }
  useEffect(() => {
    if (value.username !== currentUser.name || value.email !== currentUser.email) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value.username, value.email, currentUser.name, currentUser.email]);


  return (
    <><Navigation />
     <main className="main">
    <section className="profile">

    <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>

    <FormProfile
    onSubmit={handleSubmit}
    isValid = {isValid}
    >
      
      <div className="profile__container-info"
      >
        <label className="profile__info-text">Имя</label>
        <input
            className={`profile__info-text ${isInputValue.username === undefined|| isInputValue.username ? '' : 'profile__info-text_invalid'}`}
          type="text"
          id="username"
          name="username"
          required
          placeholder={currentUser.name}
          minLength="2"
          maxLength="40"
          disabled={!isEditProfile}
          onChange={handleChange}
          value={value.username ? value.username : ""}
        />
      </div>

      
      <div className="profile__container-info">
        <label className="profile__info-text  profile__info-text_last ">E-mail</label>
        <input
          className={`profile__info-text ${isInputValue.email === undefined|| isInputValue.email === currentUser.email  || isInputValue.email ? '' : 'profile__info-text_invalid'}`}
          type="email"
          id="email"
          name="email"
          required
          placeholder={currentUser.email}
          minLength="2"
          maxLength="40"
          disabled={!isEditProfile}
          onChange={handleChange}
          value={value.email ? value.email : ""}
        />
      </div>
    

    {isVisibleSubmit ? (
      <>
      <button type="submit" className={`profile__button-save hover-button decoration ${isValid ? '' : 'profile__button_disabled'}`}  disabled={!isValid} 
      onClick={(event) =>{
        handleSubmit(event)
        makeButtonInVisible(event)
        setEditProfile(false)
        
      }}
      >
        Сохранить
      </button>
      <button type="button" className="profile__cancel-edit" onClick={(evt) => { makeButtonInVisible(evt)
        setEditProfile(false)}}>Отменить редактирование</button>
      </>
    ) : (
      <>
      <button type="submit" className={`profile__button-edit decoration hover-button `}    onClick={(event) => {
                  setEditProfile(true)
                  makeButtonVisible(event)
                }}>
      Редактировать
      </button>
        <Link to="/" className="profile__link-exit hover-button decoration" onClick={logOut}>
          Выйти из аккаунта
        </Link>
      </>
    )}
    </FormProfile>
  </section>
  </main>
  </>
  );
}