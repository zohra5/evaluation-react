import React, { useEffect, useState } from "react";
import Search from "./Search";
import SerieList from "./SerieList";
import "./App.css";

function App() {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/rest/shows")
      .then((response) => response.json())
      .then((show) => Setdata(show));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titre"> Netfli de wish lol </h1>
        <Search />
      </header>
      <main>
        <SerieList serie={data} />
      </main>
    </div>
  );
}

export default App;
