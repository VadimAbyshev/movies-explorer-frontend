import "./NotFound.css"
import {useNavigate} from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="main">
    <section className="not-found not-found__page">
    <h1 className="not-found__title">404</h1>
    <p className="not-found__subtitle">Страница не найдена</p>
    <button
      type="button"
      className="not-found__button hover-link decoration"
      onClick={() => navigate(-1)}
    > Назад </button>
  </section>
  </main>
  )
}

