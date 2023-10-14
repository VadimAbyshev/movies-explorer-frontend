import './MoviesCard.css'
import poster from '../../../images/posterFilm.svg'
import DeleteButton from '../DeleteButton/DeleteButton'
import LikeButton from '../LikeButton/LikeButton'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function MoviesCard({name, data, savedMovies, addMovie, delMovie}) {
  const { pathname } = useLocation()
  const [click, setClick] = useState(false)

  useEffect(() => {
    if (name === 'movies')
      setClick(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, data.id, setClick, pathname])

  function onAdd() {
    if (savedMovies.some(element => data.id === element.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }

  return (
<li className="element">
    <img className="element__image"  src={name === 'movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} alt={data.name} />
  
    <div className="element__info">
        <div className='element__text'>
            <h2 className="element__title"  > {data.nameRU}</h2>
            <p className='element__timeline'>{convertTime(data.duration)}</p>
        </div>
        <div className="element__info_like-container">
        {name === "movies" ? (
          <LikeButton onClick={onAdd} click={click} savedMovies={savedMovies}></LikeButton>
        ) : (
          <DeleteButton delMovie={delMovie} data={data} ></DeleteButton>
        )}
        </div>
  </div>

</li>




  )
}

