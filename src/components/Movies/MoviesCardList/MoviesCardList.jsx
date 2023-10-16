import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen
} from "../../../utils/constants.js";

export default function MoviesCardList({name, movies, savedMovies,  serverError, firstEntry, addMovie, delMovie, allMovies, isLoading}) {

  const { pathname } = useLocation()
  const [count, setCount] = useState('')
  const fact = movies.slice(0, count)

  function printCards() {
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
      counter.init = InitLessMaxScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
      counter.init = InitSmallScreen
      counter.step = StepSmallScreen
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printCards().init)
      function printCardsForResize() {
        if (window.innerWidth >= StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < SmallScreen) {
          setCount(printCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [pathname, movies])

  function clickMore() {
    setCount(count + printCards().step)
  }




  return (

<section className='cards'>

  <ul className='cards__page'>
  {isLoading ? <Preloader /> :
        (name === "movies" && fact.length !== 0) ?
        fact.map(data => {
              return (
                <MoviesCard
                key={data.id} 
                addMovie={addMovie} 
                savedMovies={savedMovies}
                data={data}

                />
              )
            }) 
          
          : 

            (name === "saved-movies" && movies.length !== 0)  ?
              movies.map(data => {
                return (
                  <MoviesCard
                  
                    data={data}
                    name={name}
                    key={data._id}
                    delMovie = {delMovie}
                    addMovie={addMovie}
                    savedMovies={savedMovies}

                  />
                )
              }
            ):
             serverError ?
              <span className='gallery__serch-error'>«Во время запроса произошла ошибка.
                Возможно, проблема с соединением или сервер недоступен.
                Подождите немного и попробуйте ещё раз»
              </span>
              : !firstEntry ?
              <span className='gallery__serch-error'>«Ничего не найдено»</span>
              : name === 'movies' ?
              <span className='gallery__serch-error'>«Чтобы увидеть список фильмов выполните поиск»</span>
              :
              <span className='gallery__serch-error'>«Нет сохранённых фильмов»</span>
      }
           

    </ul>
  <div className='cards__tools'>
  
  {pathname === '/movies' && !firstEntry  && count < movies.length && <button className="cards__button decoration" type="button" onClick={clickMore}>Ещё</button>}
  
    </div>
</section>
  )
}