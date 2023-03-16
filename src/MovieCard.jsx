import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="card" key={imdbID}>
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img
              src={
                Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"
              }
              alt={Title}
            />
          </div>
        </div>
        <div className="front">
          <div className="img">
            <img
              src={
                Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"
              }
              alt={Title}
            />
          </div>

          <div className="front-content">
            <small className="badge">{Year}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{Title}</strong>
                </p>
              </div>
              <p className="card-footer">{Type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
