import './Movies.css'
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm"
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Navigation from '../Navigation/Navigation';
function Movies() {
  return (
    <>
 <Navigation/>
    <SearchForm/>
    <MoviesCardList name="movies"/>
    
      <Footer/>
    </>
  )
}

export default Movies