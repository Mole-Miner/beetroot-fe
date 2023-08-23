export const OMDB_EVENT = {
    SEARCH: 'omdb-search',
    MOVIES: 'omdb-movies',
    DETAILS: 'omdb-details',
    PAGINATION: 'omdb-pagination',
}

function dispatchEvent(type, detail) {
    const omdbEvent = new CustomEvent(type, {detail});
    document.dispatchEvent(omdbEvent);
}

export function dispatchSearchEvent(searchOptions) {
    dispatchEvent(OMDB_EVENT.SEARCH, searchOptions);
}

export function dispatchMoviesEvent(moviesData) {
    dispatchEvent(OMDB_EVENT.MOVIES, moviesData);
}

export function dispatchDetailsEvent(imdbID) {
    dispatchEvent(OMDB_EVENT.DETAILS, imdbID);
}

export function dispatchPaginationEvent(page) {
    dispatchEvent(OMDB_EVENT.PAGINATION, page);
}
