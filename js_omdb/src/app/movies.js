import { getMovies } from "@js/API";

const moviesSection = document.querySelector('section.movies');

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
    movieLearnMore.addEventListener('click', async () => {
        document.dispatchEvent(new CustomEvent('omdb-details', {detail: movie.imdbID}));
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

document.addEventListener('omdb-search', async (e) => {
    const searchOptions = e.detail;
    const moviesData = await getMovies(searchOptions);
    document.dispatchEvent(new CustomEvent('omdb-movies', {detail: moviesData}));
    renderMoviesSection(moviesData.movies);
});
