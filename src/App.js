import React,{useState,useEffect} from 'react';
// import './App.css';

import Movie from "./components/Movie";



const FEATURED_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6283d969a7fbafe2c3d550f35ed4060d&page=1";

const IMG_API="https://image.tmdb.org/t/p/w1280";

const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=6283d969a7fbafe2c3d550f35ed4060d&query=";




function App() {

  const [movies,setMovies]=useState([]);

  useEffect(()=>{

    fetch(FEATURED_API)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.results);
      setMovies(data.results)
    })

  },[])


  return (
    <div className="App">
      {movies.length>0 && movies.map(m=>(
        <Movie />
      ))}
    </div>
  );
}

export default App;
