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
   const [isCheckToken, setIsCheckToken] = useState(true)
   const [isSuccess, setIsSuccess] = useState(false)
   const [isEditProfile, setEditProfile] = useState(false)

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
          setIsCheckToken(false);
        })
        .catch((err) => {
          console.error(`Ошибка при загрузке начальных данных ${err}`);
          setIsCheckToken(false);
          localStorage.clear();
        });
    } else {
      setLoggedIn(false);
      setIsCheckToken(false);
      localStorage.clear();
    }
  }, [loggedIn]);

  function editUserData(username, email) {
    apiMain.setUserInfo(username, email, localStorage.jwt)
      .then(res => {
        setCurrentUser(res)
        setIsSuccess('Успешно')
        setEditProfile(false)
      })
      .catch((err) => {
        console.error(`Ошибкак при редактировании данных пользователя ${err}`)
        setIsSuccess('Пользователь с таким email уже зарегестрирован')
      })
      
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
        setInfoTooltipSuccess('Ошибка регистрации')
      })
      .finally(() => { console.log("l2 cancelled"); });
      setTimeout(() => {
        setInfoTooltipSuccess('')
      },  WAIT_MESSAGE);

      
        

  
}
  function handleLoginUser(password, email, ) {
    loginUser(password, email)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true)
        
        navigate('/movies');
      })
      .catch(error => {
        console.error(`Ошибка авторизации ${error}`);
        setInfoTooltipSuccess('Ошибка Авторизации')

      })
      .finally(() => { console.log("l2 cancelled"); });
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
          <Route path='/signup' element={<Register onRegister = {handleRegisterUser} isSucess={isInfoTooltipSuccess}/>}/>
          <Route path='/signin' element={<Login onLogin={handleLoginUser} isSucess={isInfoTooltipSuccess} />}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/saved-movies" element={<ProtectedRoute component={SavedMovies} loggedIn={loggedIn} savedMovies={savedMovies} setIsError={setIsError}  delMovie={handleMovieDelete} name="saved-movies"/>}/>
          <Route path='/profile' element={<ProtectedRoute component={Profile} loggedIn={loggedIn} logOut={logOut} editUserData={editUserData} isEditProfile={isEditProfile} setEditProfile={setEditProfile}/>}/>




</Routes>


</CurrentUserContext.Provider>
  );
}

export default App;


