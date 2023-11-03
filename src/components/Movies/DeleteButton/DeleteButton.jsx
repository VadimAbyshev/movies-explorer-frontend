import "./DeleteButton.css";

export default function DeleteButton({data, delMovie}) {
  
  return (
        <button
          className="element__button-delete hover-button"
          type="button"
          onClick={() => delMovie(data._id)}
        ></button>
  );
}

