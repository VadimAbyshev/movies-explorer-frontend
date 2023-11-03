import "./LikeButton.css";

export default function LikeButton({onClick, click}) {


  return (
    <button className={`decoration element__like-button  hover-button ${click ? 'element__like-button_active' : ''}`} type="button" onClick={onClick} />
  );
}
