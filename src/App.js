import React,{useState,useEffect} from 'react';
// import './App.css';

import Movie from "./components/Movie";



const FEATURED_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6283d969a7fbafe2c3d550f35ed4060d&page=1";



const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=6283d969a7fbafe2c3d550f35ed4060d&query=";




function App() {

  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState("");



  const getMovies=(API)=>{

    fetch(API)
    .then(res=>res.json())
    .then(data=>{
      setMovies(data.results)
    })

  }



  useEffect(()=>{

    getMovies(FEATURED_API);

  },[])


  const handleOnSubmit=(e)=>{
    e.preventDefault();

   getMovies(SEARCH_API+searchTerm)

    setSearchTerm("")

  }

  
  const handleOnChange=e=>{
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App" >
      <header>
        <form onSubmit={handleOnSubmit}>
          <input type="text" placeholder="Search ..." className="search" 
          value={searchTerm}
          onChange={handleOnChange}
          />
        </form>
        </header>
      {movies.length>0 && movies.map(m=>(
        <Movie key={m.id} {...m}/>
      ))}
    </div>
  );
}

export default App;
