import React from "react";

function Cards({ url, title, instruction, startGame }) {
  return (
    <div className="col-lg-3">
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Instructions: {instruction}</p>
        <button
          type="button"
          onClick={() => startGame(title)}
          className="btn btn-primary"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Cards;
