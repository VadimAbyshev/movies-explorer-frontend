import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Navigation from '../../Navigation/Navigation'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


export default function MoviesCardList({name, movies, savedMovies,  serverError, firstEntry, addMovie, delMovie, allMovies}) {

  const { pathname } = useLocation()
  const [count, setCount] = useState('')
  const fact = movies.slice(0, count)






  return (

<section className='cards'>

  <ul className='cards__page'>
    
  {
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
    <button className="cards__button decoration" type="button">
        Ещё
    </button>
    </div>
</section>
  )
}