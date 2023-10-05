import './Main.css'
import Navigation from '../Navigation/Navigation';
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import NavTab from "./NavTab/NavTab"
import Portfolio from "./Portfolio/Portfolio";
import Footer from '../Footer/Footer';
function Main() {
  return (
    <>
        <Navigation name='home'/>
      <main className="main">

        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
        
      </main>
      <Footer/>
    </>
  )
}

export default Main