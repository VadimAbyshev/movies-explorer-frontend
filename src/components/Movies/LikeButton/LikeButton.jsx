import "./LikeButton.css";
import { useState } from 'react'

export default function LikeButton() {
    const[isLike, setIsLike] = useState()

    function onLike(){
    
        setIsLike(true)
    }
  return (
    <button className={`decoration element__like-button  ${isLike ? 'element__like-button_active' : ''}`} type="button" onClick={onLike} />
  );
}
