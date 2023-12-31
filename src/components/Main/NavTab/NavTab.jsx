import {HashLink} from 'react-router-hash-link';
import "./NavTab.css"

export default function NavTab() {
  return (
    <nav className="navigaton__table">
      <ul className="navigaton__table__links list">
        <li className='navigation__table_decoration'><HashLink smooth to="/#about-project" className="navigaton__table__link hover-link">О проекте</HashLink></li>
        <li className='navigation__table_decoration'><HashLink smooth to="/#techs" className="navigaton__table__link hover-link">Технологии</HashLink></li>
        <li className='navigation__table_decoration'><HashLink smooth to="/#about-me" className="navigaton__table__link hover-link">Студент</HashLink></li>
      </ul>
    </nav>
  )
}
