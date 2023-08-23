import { getMovies } from "@js/API";
import { dispatchDetailsEvent, dispatchMoviesEvent, OMDB_EVENT } from "@js/dispatch";

const moviesSection = document.querySelector('section.movies');
let searchOptions = {};

function clearMoviesSection() {
    if (moviesSection.children.length > 0) {
        Array.from(moviesSection.children).forEach((child) => child.remove());
    }
}

function renderMovieSection(movie) {
    const movieSection = document.createElement('section');
    movieSection.className = 'movie'
    const moviePoster = document.createElement('img');
    moviePoster.src = movie.Poster;
    const movieTitle = document.createElement('h1');
    movieTitle.textContent = movie.Title;
    const movieYear = document.createElement('span');
    movieYear.textContent = movie.Year;
    const movieLearnMore = document.createElement('button');
    movieLearnMore.textContent = 'Details';
    movieLearnMore.addEventListener('click', () => {
        dispatchDetailsEvent(movie.imdbID);
    });
    movieSection.append(moviePoster, movieTitle, movieYear, movieLearnMore);
    moviesSection.appendChild(movieSection);
}

function renderMoviesSection(movies) {
    clearMoviesSection();
    if (movies.length === 0) {
        moviesSection.textContent = 'Movies not found';
        return;
    }
    for (const movie of movies) {
        renderMovieSection(movie);
    }
}

document.addEventListener(OMDB_EVENT.SEARCH, async (e) => {
    searchOptions = e.detail;
    const moviesData = await getMovies(searchOptions);
    dispatchMoviesEvent(moviesData);
    renderMoviesSection(moviesData.movies);
});

document.addEventListener(OMDB_EVENT.PAGINATION, async (e) => {
    const page = e.detail;
    searchOptions = {
        ...searchOptions,
        page,
    };
    const moviesData = await getMovies(searchOptions);
    renderMoviesSection(moviesData.movies);
});
