// Реалізувати веб-сторінку для пошуку фільмів. За відкриття сторінки користувачеві доступна тільки форма
// для введення назви фільму (або частини назви) і вибору типу (movie, series, episode).

async function getMovies({search, type}) {
    try {
        const searchParams = new URLSearchParams({
            s: search,
            type,
            i: 'tt3896198',
            apikey: '6fcb550a',
        }).toString();
        const url = new URL(`http://www.omdbapi.com/?${searchParams}`);
        const response = await fetch(url);
        const {Search, totalResults} = await response.json();
        return {
            movies: Search,
            total: Number(totalResults),
        }
    } catch (err) {
        console.log(err);
        return {
            movies: [],
            total: 0,
        };
    }
}

/*getMovies({
    search: 'Blade'
})
    .then(console.log);*/
