import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../Movies/SavedMovies/SavedMovies'
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import Register from '../Register/Register';
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile'
import {useEffect, useState} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { regUser, loginUser, checkTokens } from "../../utils/Auth.js"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import apiMain from '../../utils/MainApi';
function App() { 
  const [currentUser, setCurrentUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  const [isInfoTooltipSuccess, setInfoTooltipSuccess] = useState('')
   const WAIT_MESSAGE = 2000;
   const [isError, setIsError] = useState(false)
   const [savedMovies, setSavedMovies] = useState([])
   const [isEditProfile, setEditProfile] = useState(false)
   const [isSend, setIsSend] = useState(false)
   useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([
        apiMain.getUserData(localStorage.jwt),
        apiMain.getMovies(localStorage.jwt),
      ])
        .then(([dataUser, dataMovies]) => {
          setSavedMovies(dataMovies.reverse());
          setCurrentUser(dataUser);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.error(`Ошибка при загрузке начальных данных ${err}`);
          localStorage.clear();
        });
    } else {
      setLoggedIn(false);
      localStorage.clear();
    }
  }, [loggedIn]);

  function editUserData(username, email) {
    apiMain.setUserInfo(username, email, localStorage.jwt)
      .then(res => {
        setCurrentUser(res)
        setInfoTooltipSuccess('Успешно')
        setEditProfile(false)
      })
      .catch((err) => {
        console.error(`Ошибкак при редактировании данных пользователя ${err}`)
        setInfoTooltipSuccess('Пользователь с таким email уже зарегестрирован. Повторите попытку')
      })  
      .finally(() => { console.log("l2 cancelled"); });
      setTimeout(() => {
        setInfoTooltipSuccess('')
      },  WAIT_MESSAGE);

      
  }

  function handleMovieDelete(deleteMovieId) {
    // делаем запрос DELETE по id фильма
    apiMain
      .deleteMovie(deleteMovieId, localStorage.jwt)
      // если все успешно, то возравщаем массив ещё не удаленных фильмов
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deleteMovieId;
          }),
        );
      })
      .catch((err) => console.error(`Ошибка при удалении фильма ${err}`));
  }

 function handleLikeMovie(data) {
    const isMovieLiked = savedMovies.some((movie) => movie.movieId === data.id);

    if (isMovieLiked) {
      // Если фильм уже лайкнут, удаляем его
      const clickedMovie = savedMovies.find(
        (movie) => movie.movieId === data.id,
      );
      if (clickedMovie) {
        handleMovieDelete(clickedMovie._id);
      }
    } else {
      // Если фильм не лайкнут, добавляем лайк
      apiMain
        .addMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.error(`Ошибка при установке лайка ${err}`));
    }
  }

  function handleRegisterUser(username, password, email) {
    setIsSend(true)
    regUser(username, password, email)
      .then(res => {
        if (res) {
          loginUser(password, email)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true)
        
        navigate('/movies');
      })
          
        }
      })
      .catch(error => {
        console.error(`Ошибка регистрации ${error}`);
        setInfoTooltipSuccess('Данный email уже зарегестрирован')
      })
      .finally(() => 
      setIsSend(false));
      setTimeout(() => {
        setInfoTooltipSuccess('')
      },  WAIT_MESSAGE);

      
        

  
}
  function handleLoginUser(password, email, ) {
    setIsSend(true)
    loginUser(password, email)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true)
        
        navigate('/movies');
      })
      .catch(error => {
        console.error(`Ошибка авторизации ${error}`);
        setInfoTooltipSuccess('Неверный пароль или логин')

      })
      .finally(() =>  setIsSend(false));
      setTimeout(() => {
        setInfoTooltipSuccess('')
      },  WAIT_MESSAGE);
  }
  useEffect(() => {
    if (localStorage.jwt) {
      checkTokens(localStorage.jwt)
        .then(res => {
          setLoggedIn(true)
         
        })
        .catch(error => console.log(`Ошибкак авторизации повторном входе ${error}`))
    }
  }, [navigate])

  function logOut() {
    localStorage.clear()
    setLoggedIn(false)
    navigate('/')
  }


  return (
    
    <CurrentUserContext.Provider value={currentUser}>
<Routes>

  
          <Route path="/" element={<Main loggedIn={loggedIn}/>} />
          <Route path="/movies"  element={<ProtectedRoute component={Movies} loggedIn={loggedIn} savedMovies={savedMovies} setIsError={setIsError} addMovie={handleLikeMovie} name="movies" />} />
          <Route path='/signup'  element={ loggedIn ? <Navigate to='/movies' replace /> : <Register onRegister = {handleRegisterUser} isSucess={isInfoTooltipSuccess} isSend ={isSend}/>}/>
          <Route path='/signin' element={ loggedIn ? <Navigate to='/movies' replace /> : <Login onLogin={handleLoginUser} isSucess={isInfoTooltipSuccess} isSend ={isSend}/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/saved-movies" element={<ProtectedRoute component={SavedMovies} loggedIn={loggedIn} savedMovies={savedMovies} setIsError={setIsError}  delMovie={handleMovieDelete} name="saved-movies"/>}/>
          <Route path='/profile' element={<ProtectedRoute component={Profile} loggedIn={loggedIn} logOut={logOut} editUserData={editUserData} isEditProfile={isEditProfile} setEditProfile={setEditProfile} isSucess={isInfoTooltipSuccess} />}/>



</Routes>

  
</CurrentUserContext.Provider>
  );
}

export default App;


