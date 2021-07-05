import React from "react";
import { useState, useEffect } from "react";
import "./search.css";
import Serie from "./Serie";

export default function Search() {
  const [data, Setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/rest/shows")
      .then((response) => response.json())
      .then((show) => Setdata(show));
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  console.log(searchTerm);

  return (
    <section className="searchbox">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        id="SearchBar"
        onChange={handleSearchTerm}
      />
      <div className="search_results">
        {data
          .filter((val) => {
            return val.title.toLowerCase().includes(searchTerm);
          })
          .map((val) => {
            return (
              <div className="search_result search container" key={val.id}>
                <Serie serie={val} />
              </div>
            );
          })}
      </div>
    </section>
  );
}
