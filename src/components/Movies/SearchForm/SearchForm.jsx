import { useLocation } from "react-router-dom";
import "./SearchForm.css"
import {useEffect, useState} from "react";
import useFormValidation from "../../../utils/useFormValidation";

export default function SearchForm({ name, isCheck, changeShort, searchedMovies, searchMovies, setIsError, firstEntry, savedMovies}){
  const { reset, handleChange, value } = useFormValidation()

  useEffect(() => {
    if ((name === 'saved-movies' && savedMovies.length === 0)) {
      reset({ search: '' })
    } else {
      reset({ search: searchedMovies })
    }
    setIsError(false)
  }, [searchedMovies,  setIsError, savedMovies])

  // useEffect(() => {
  //   const savedSearch = localStorage.getItem("searchInputValue");
  //   if (savedSearch && name !== "movies") {
  //     reset({ searchInput: savedSearch });
  //   } else {
  //     reset({ searchInput: "" });
  //   }
  // }, [savedMovies, name]);


  // function onSubmit(evt) {
  //   evt.preventDefault();
    
  //   const searchInputValue = evt.target.searchInput.value;
  //   searchMovies(evt.target.searchInput.value);
  //   if (searchInputValue && name === "movies") {
  //     localStorage.getItem("searchInputValue", searchInputValue);
  //   }
  // }
  function onSubmit(evt) {
    evt.preventDefault()
    if (evt.target.searchInput.value) {
      searchMovies(evt.target.searchInput.value)
      setIsError(false)
    } else {
      setIsError(true)
    }
  }
  return (
    <section className="search page__search">

      <form className="search__form form "  onSubmit={onSubmit}>

        <div className="search__form-container">

          <div className="search__form-input-container">

            <div className="search__icon"/>

            <input
              type="text"
              className="search__form-input input-focus"
              placeholder="Фильм"
              name="searchInput"
              value={value.searchInput || ''}
              required
              checked={isCheck}
              onChange={(evt) => {
                handleChange(evt)
                setIsError(false)
              }}
            />
            
            <button  className="search__form-button-submit decoration" type='submit' onSubmit={onSubmit}/>
          </div>
          
          <div className="search__checkbox-container button-hover">
            
            <label className="search__checkbox-label">
              <input
                className="search__checkbox"
                type="checkbox"
                name="searchCheckbox"
                id="searchCheckbox"
                disabled = {firstEntry}
                checked={isCheck}
                onChange={() => changeShort()}
              />

              <span className="search__checkbox-span input-focus"/>
              <span className="search__checkbox-caption">Короткометражки</span>
            </label>
          </div>

        </div>
   
      </form>

    </section>
  )
}

