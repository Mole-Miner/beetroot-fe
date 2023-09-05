import React, { useState } from "react";
import '@scss/Movies.scss';
import { getMovies } from '@js/api/omdb.api';

function Movie({movie}) {
    return (
        <div className={"movie"}>
            <img src={movie.Poster} alt="Movie poster" />
            <h3>{movie.Title}</h3>
        </div>
    );
}

function Movies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        getMovies({search, type, page: 1})
            .then((data) => setMovies(data.movies))
            .catch((err) => console.log('Failed ', err));
    }

    function onMovieSearch(e) {
        setSearch(e.target.value);
    }

    function onSelectMovieType(e) {
        setType(e.target.value);
    }

    return (
        <section className={"movies"}>
            <section className={"movies__search"}>
                <h1>Movies</h1>
                <p>Movies description</p>
                <form onSubmit={onFormSubmit}>
                    <label>
                        Enter movie:
                        <input type="text" value={search} onInput={onMovieSearch} name="search" placeholder="Blade"
                               required/>
                    </label>
                    <label>
                        Select type:
                        <select name="type" onChange={ onSelectMovieType } required>
                            <option value={ type }>Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                            <option value="episode">Episode</option>
                        </select>
                    </label>
                    <button>Search</button>
                </form>
            </section>
            <section className={"movies__content"}>
                {
                    movies.map((movie) => <Movie key={movie.imdbID} movie={movie}/>)
                }
            </section>
        </section>
    );
}

export default Movies;
