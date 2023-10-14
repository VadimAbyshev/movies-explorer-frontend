import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'
import Navigation from "../../Navigation/Navigation";
import Footer from "../../Footer/Footer";


export default function SavedMovies() {
  return (
    <>
      <Navigation/>
      <main className="main">
      <SearchForm/>
       <MoviesCardList name='saved-movies'/>
       </main>
    <Footer/>
    </>
  )
}
