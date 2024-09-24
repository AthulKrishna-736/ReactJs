import React, { useEffect, useState } from "react";
import axios from "./axios";
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './Row.css'

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
const [movies, setMovies] = useState([]) //initial null array movies
const [trailerUrl, setTrailerUrl] = useState('');

useEffect(()=>{
    async function fetchData() {
        const request = await axios.get(fetchUrl) //fetching data
        setMovies(request.data.results); //update movies 
        return request;
    }
    fetchData(); //calling async fn
}, [fetchUrl])


    const opts = {
        height: '390',
        width: '100%',
        playerVars :{
            autoplay:1,
        }
    }

    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
            .then((url) =>{
                const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error))
        }
      }


    return(
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">

                {movies.map((movie)=>( //mapping each movies with single component
                    <img 
                    key={movie.id}
                    onClick={()=> handleClick(movie)}
                    className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;