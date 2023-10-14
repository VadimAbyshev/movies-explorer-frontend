import "./LikeButton.css";
import { useState } from 'react'

export default function LikeButton({onClick, click}) {
    const[isLike, setIsLike] = useState()

    function onLike(){
    
        setIsLike(true)
    }
  return (
    <button className={`decoration element__like-button  hover-button ${isLike ? 'element__like-button_active' : ''}`} type="button" onClick={onClick} />
  );
}
