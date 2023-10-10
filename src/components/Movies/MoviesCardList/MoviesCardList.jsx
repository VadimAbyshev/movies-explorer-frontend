import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Navigation from '../../Navigation/Navigation'


export default function MoviesCardList({name}) {

  return (
    
<section className='cards'>
 
  <ul className='cards__page'>
    <MoviesCard name={name} title={'Семеро'}/>
    <MoviesCard name={name} title={'Восемь'}/>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
    <MoviesCard name={name}/>
   
    </ul>
  <div className='cards__tools'>
    <button className="cards__button decoration" type="button">
        Ещё
    </button>
    </div>
</section>
  )
}