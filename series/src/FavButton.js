import { useState } from "react";

export default function FavButton(props) {
  const { titleserie, favoris, id } = props;
  const [fav, setfav] = useState(favoris);
  function onButtonClick() {
    fetch(`http://localhost:4000/rest/shows/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleserie,
        user: { favorited: !fav },
      }),
    })
      .then((response) => response.json())
      .then(setfav(!fav));
  }

  let FavButtonElement = (
    <button className="btn btn-default swap" onClick={() => onButtonClick()}>
      <span className="glyphicon glyphicon-heart-empty"></span>
    </button>
  );
  if (fav === false) {
    FavButtonElement = (
      <button className="btn btn-default swap" onClick={() => onButtonClick()}>
        <span className="glyphicon glyphicon-heart-empty"></span>
      </button>
    );
  } else {
    FavButtonElement = (
      <button className="btn btn-default swap" onClick={() => onButtonClick()}>
        <span className="glyphicon glyphicon-heart"></span>
      </button>
    );
  }
  return FavButtonElement;
}
