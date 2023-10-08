import './MoviesCard.css'
import poster from '../../../images/posterByFilm.jpg'
import DeleteButton from '../DeleteButton/DeleteButton'
import LikeButton from '../LikeButton/LikeButton'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function MoviesCard({name}) {
   
  
    

  return (
<div className="element">
    <img className="element__image"  src={poster} alt='Постер к Фильму'/>
  
    <div className="element__info">
        <div className='element__text'>
            <h2 className="element__title" >Akuna Matata</h2>
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

</div>




  )
}