
import React from 'react';



const IMG_API="https://image.tmdb.org/t/p/w1280";
const UNSPLASH_DEFAULT_IMG="https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"


const setVoteClass=(vote)=>{

   if(vote>=8){
       return "highlight"
   }else if(vote>=6){
       return "average"
   }else{
       return "no-highlight"
   }
}


const Movie=({title,poster_path,overview,vote_average})=> {
    return (
        <div className="movie-cont">
            <img src={poster_path?(IMG_API+poster_path):UNSPLASH_DEFAULT_IMG} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
           
        </div>
    );
}

export default Movie;
