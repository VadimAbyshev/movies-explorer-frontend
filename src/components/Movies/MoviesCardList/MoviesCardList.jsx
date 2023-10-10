import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Navigation from '../../Navigation/Navigation'


export default function MoviesCardList({name}) {

  return (
    
<section className='cards'>
 
  <ul className='cards__page'>
    <MoviesCard name={name} title={'Семеро'}/>
    <MoviesCard name={name} title={'Восемь'}/>
    <MoviesCard name={name} title={'Шесть'}/>
    <MoviesCard name={name} title={'11'}/>
    <MoviesCard name={name} title={'101 день'}/>
    <MoviesCard name={name} title={'этап 4 не за горами'}/>
    <MoviesCard name={name} title={'функционал не реален'}/>
    <MoviesCard name={name} title={'Восемь'}/>
   
    </ul>
  <div className='cards__tools'>
    <button className="cards__button decoration" type="button">
        Ещё
    </button>
    </div>
</section>
  )
}