import "./AboutProject.css"

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info">
            <h3 className="about-project__info-title ">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-subtitle">Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.</p>
            <h3 className="about-project__info-title about-project__info_days">На выполнение диплома ушло 5 недель</h3>
         
            <p className="about-project__info-subtitle about-project__info-subtitle_deathlines">У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__table">
            
            <p className="about-project__table-title about-project__table-title_color_green">1 неделя</p>
            <p className="about-project__table-title about-project__table-title_color_grey">4 недели</p>
            <p className="about-project__table-subtitle">Back-end</p>
            <p className="about-project__table-subtitle">Front-end</p>

        </div>
    </section>
  )
}
