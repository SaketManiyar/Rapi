import React, { useState, useEffect } from "react";
import "../App.css";
import CardData from "./CardData";
import SearchBox from "./SearchBox";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("avengers");
  const [search,setSearch] = useState('');
  

  // useEffect(() => {
  //   getMovies();
  // }, [query]);

  const getMovies = async () => {
    const response = await fetch(
      `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "",
          "x-rapidapi-host": "",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.d);
  };

  const updateSearch = (e) =>{
    setSearch(e.target.value);
  };

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
  }

  return (
    <>
      <SearchBox />
      {movies.map((movie) => (
        <CardData key={movie.id} title={movie.l} image={movie.i.imageUrl} />
      ))}
    </>
  );
};
