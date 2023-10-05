import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'
import Navigation from "../../Navigation/Navigation";

export default function SavedMovies() {
  return (
    <>
      <Navigation/>
      <SearchForm/>
       <MoviesCardList name='saved-movies'/>
    
    </>
  )
}
