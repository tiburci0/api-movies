import React from "react";
import APIKEY from "../includes/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './assets/css/style.css';

const Index = () =>{
    const [movies, setMovies] = useState([]);
    const movie_image = 'https://image.tmdb.org/t/p/w500/';
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-BR&page=1`)
        .then(res => res.json())
        .then(data => setMovies(data.results));
    }, [])
    return(
        <div className="container">
            <h1>Filmes</h1>
            <ul>
                {movies.map(movie =>{
                    return(
                        <li key={movie.id}>
                            <Link to={`/detalhes/${movie.id}`}>
                                <img src={`${movie_image}${movie.poster_path}`}/>
                            </Link>
                            <span>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Index;