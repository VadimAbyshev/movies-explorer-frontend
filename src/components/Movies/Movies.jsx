import './Movies.css'
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm"
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Navigation from '../Navigation/Navigation';
function Movies() {
  return (
    <>
 <Navigation/>
 <main className="main">
    <SearchForm/>
    <MoviesCardList name="movies"/>
    </main>
      <Footer/>
    </>
  )
}

export default Movies