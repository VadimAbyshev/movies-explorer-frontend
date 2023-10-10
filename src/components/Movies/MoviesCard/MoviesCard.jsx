import './MoviesCard.css'
import poster from '../../../images/posterFilm.svg'
import DeleteButton from '../DeleteButton/DeleteButton'
import LikeButton from '../LikeButton/LikeButton'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function MoviesCard({name, title}) {
   

  return (
<li className="element">
    <img className="element__image"  src={poster} alt={title}/>
  
    <div className="element__info">
        <div className='element__text'>
            <h2 className="element__title"  >{title}</h2>
            <p className='element__timeline'>1ч15м</p>
        </div>
        <div className="element__info_like-container">
        {name === "movies" ? (
          <LikeButton></LikeButton>
        ) : (
          <DeleteButton></DeleteButton>
        )}
        </div>
  </div>

</li>




  )
}

