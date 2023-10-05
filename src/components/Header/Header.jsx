import logo from '../../images/logo.png'
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
export default function Header({name}){
    return(
        <header className="header">
      <div className='header__container'>
    
      <Link to="/">
      <img
        src={logo}
        alt="логотип"
        className="header__logo"
      />
      </Link> 
        
    
        </div>
      </header>
    );
}