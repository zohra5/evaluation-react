import React from "react";
import FavButton from "./FavButton";
import "./serie.css";

export default function Serie(props) {
  const { serie } = props;

  return (
    <div className="color">
      <section>
        <div className="banniere">
          <img src={serie.images.poster} alt=""></img>

          <h1> {serie.title}</h1>
        </div>
        <div>
          <p>{serie.description}</p>
        </div>
        <div>
          <p>
            {serie.genres.map((genres) => (
              <span key={genres}>{genres}</span>
            ))}
          </p>
        </div>

        <div>
          <p>
            <FavButton
              titleserie={serie.title}
              favoris={serie.user.favorited}
              id={serie.id}
            />
          </p>
        </div>
      </section>
    </div>
  );
}
