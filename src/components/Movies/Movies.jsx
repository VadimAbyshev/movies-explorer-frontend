import './Movies.css'
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm"
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Navigation from '../Navigation/Navigation';
import apiMovies from '../../utils/MoviesApi.js';
import { useCallback, useEffect, useState } from 'react';

export default function Movies({name, savedMovies, setIsError, addMovie}) {
  const [allMovies, setAllMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [searchedMovies, setSearchedMovies] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [firstEntry, setFirstEntry] = useState(true)
  
  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovies(search)
    localStorage.setItem('movie', JSON.stringify(search))
    localStorage.setItem('shorts', JSON.stringify(isCheck))
    localStorage.setItem('allmovies', JSON.stringify(movies))
    setFilteredMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  }, [])
  
//   function moviesSearch (search) {
//     setFirstEntry(false);
//     filter(search, isCheck, savedMovies);
// }


  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true)
      apiMovies.getMovies()
        .then((res) => {
          setAllMovies(res)
          setIsCheck(false)
          setServerError(false)
          setFirstEntry(false)
          filter(search, isCheck, res)
        })
        .catch(err => {
          setServerError(true)
          console.error(`Ошибкак при поске фильмов ${err}`)
        })
        .finally(() => setIsLoading(false))
    } else {
      filter(search, isCheck, allMovies)
    }
  }
  
  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies)
      const search = JSON.parse(localStorage.movie)
      const isCheck = JSON.parse(localStorage.shorts)
      setServerError(false)
      setFirstEntry(false)
      setSearchedMovies(search)
      setIsCheck(isCheck)
      setAllMovies(movies)
      filter(search, isCheck, movies)
    }
  }, [filter])

  function changeShort() {
    if (isCheck) {
      setIsCheck(false)
      filter(searchedMovies, false, allMovies)
      localStorage.setItem('shorts', JSON.stringify(false))
    } else {
      setIsCheck(true)
      filter(searchedMovies, true, allMovies)
      localStorage.setItem('shorts', JSON.stringify(true))
    }
  }
  return (
    <>
 <Navigation/>
 <main className="main">
    <SearchForm
    name = 'movies'
isCheck={isCheck}
searchMovies={searchMovies}
searchedMovie={searchedMovies}
changeShort={changeShort}
firstEntry={firstEntry}
setIsError={setIsError}
movies={allMovies}
savedMovies={savedMovies}

     />


    <MoviesCardList 
    name = {name}
    addMovie = {addMovie}
    setIsError={setIsError}
    movies={filteredMovies}
    savedMovies={savedMovies}
    allMovies = {allMovies}
    isLoading={isLoading}
    serverError={serverError}
    firstEntry={firstEntry}
    />
    </main>
      <Footer/>
    </>
  )
}
