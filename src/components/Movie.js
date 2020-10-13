
import React from 'react';



const IMG_API="https://image.tmdb.org/t/p/w1280";


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
            <img src={IMG_API+poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
           
        </div>
    );
}

export default Movie;
