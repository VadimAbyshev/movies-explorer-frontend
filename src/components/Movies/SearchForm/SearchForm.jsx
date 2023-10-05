import "./SearchForm.css"
import {useState} from "react";

export default function SearchForm(){

  return (
    <div className="search page__search">

      <form className="search__form form" >

        <div className="search__form-container">

          <div className="search__form-input-container">

            <div className="search__icon"/>

            <input
              type="text"
              className="search__form-input input-focus"
              placeholder="Фильм"
              name="searchInput"
              required
            />
            
            <button className="search__form-button-submit decoration"/>
          </div>
          
          <div className="search__checkbox-container button-hover">
            
            <label className="search__checkbox-label">
              <input
                className="search__checkbox"
                type="checkbox"
                name="searchCheckbox"
                id="searchCheckbox"
              />

              <span className="search__checkbox-span input-focus"/>
              <span className="search__checkbox-caption">Короткометражки</span>
            </label>
          </div>

        </div>
   
      </form>

    </div>
  )
}

