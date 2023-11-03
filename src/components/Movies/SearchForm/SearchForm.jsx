import { useLocation } from "react-router-dom";
import "./SearchForm.css"
import {useEffect, useState} from "react";
import useFormValidation from "../../../utils/useFormValidation";

export default function SearchForm({ name, isCheck, changeShort, searchedMovies, searchMovies, setIsError, firstEntry, savedMovies,
  movies ,
  filter ,
  setIsCheck }){
  const { reset, handleChange, value } = useFormValidation()
  const { pathname } = useLocation()

  // useEffect(() => {
  //   const savedSearch = localStorage.getItem("searchInputValue")
  //   if ((pathname !== '/saved-movies' && savedMovies.length === 0)) {
  //     reset({ search: searchedMovies ,
  //   searchInput: savedSearch})
  //   } else {
  //     reset({ search: '',
  //       searchInput: ''})
  //   }
  //   setIsError(false)
  // }, [searchedMovies,  setIsError, savedMovies])

  useEffect(() => {
    const savedSearch = localStorage.getItem("searchInputValue");
    if (savedSearch && pathname !== "/saved-movies") {
      reset({ searchInput: savedSearch });
    } else {
      reset({ searchInput: "" });
    }
  }, [savedMovies, name]);


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
    const searchInputValue = evt.target.searchInput.value;
    if (evt.target.searchInput.value) {
      searchMovies(evt.target.searchInput.value)
      setIsError(false)
    } else {
      setIsError(true)
    }
    if (searchInputValue && pathname === "/movies") {
      localStorage.setItem("searchInputValue", searchInputValue);
    }
  }
function changeShort(){
  if (isCheck){
    setIsCheck(false)
    filter(value.searchInput, false, movies)
    
  }
  else{
    setIsCheck(true)
    filter(value.searchInput, true, movies)
  }
  if (pathname === "/movies") {
    localStorage.setItem("searchInputValue", value.searchInput || "");
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
                onChange={() => changeShort()
                }
            
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

