import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../Movies/SavedMovies/SavedMovies'
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import Register from '../Register/Register';
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile'
import Navigation from '../Navigation/Navigation';
import {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

function App() { 
  const [currentUser, setCurrentUser] = useState()

  return (
    <CurrentUserContext.Provider value={currentUser}>
     
      <div className="page">
<Routes>

  
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path='/sign-up' element={<Register/>}/>
          <Route path='/sign-in' element={<Login/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/saved-movies" element={<SavedMovies />}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/nav' element={<Navigation/>}/>




</Routes>
</div>


</CurrentUserContext.Provider>
  );
}

export default App;


