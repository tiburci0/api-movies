import React from "react";
import APIKEY from "../includes/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detalhes = () => {
    const { id } = useParams();
    const [movie, setMovies] = useState([]);
    const movie_image = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR`)
        .then(res => res.json())
        .then(data => {
            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${movie_image}${data.poster_path}`,
                releaseDate: data.release_date
            }
            setMovies(movie)
        });
    }, [id])
    return(
        <div className="detalhes">
            <img src={movie.image} alt={movie.title} id="image-details"/>
            <div className="movie-infos">
                <span className="movie-titles">{movie.title}</span>
                <span className="movie-titles">Sinopse: <span>{movie.sinopse}</span></span>
                <span><span className="movie-titles">Data de lançamento:</span> {movie.releaseDate}</span>
                <Link to="/" className="bg-danger">Voltar</Link>
            </div>
        </div>
    )
}

export default Detalhes;