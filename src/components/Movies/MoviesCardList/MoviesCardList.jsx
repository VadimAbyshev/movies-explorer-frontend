import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Navigation from '../../Navigation/Navigation'


export default function MoviesCardList({name}) {

  return (
    
<section className='cards'>
 
  <div className='cards__page'>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
   
    </div>
  <div className='cards__tools'>
    <button className="cards__button decoration" type="button">
        Ещё
    </button>
    </div>
</section>
  )
}