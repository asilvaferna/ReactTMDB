import React from 'react';
import './Movie.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Movie = props =>
    <div className='movie'>
        {
            props.details.poster_path &&
            <img src={IMG_URL + props.details.poster_path} alt={props.details.title} className="movie__poster" />
        }
        <h1 className="movie__title"><span>{props.details.title}</span></h1>
    </div>

export default Movie;