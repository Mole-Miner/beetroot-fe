export const moviesService = {
    async getMovies({search, type, page}) {
        try {
            const searchParams = new URLSearchParams({
                s: search,
                type,
                page,
                i: 'tt3896198',
                apikey: '6fcb550a',
            }).toString();
            const url = new URL(`http://www.omdbapi.com/?${searchParams}`);
            const response = await fetch(url);
            const {Search, totalResults} = await response.json();
            return {
                movies: Search ?? [],
                total: Number(totalResults) ?? 0,
            }
        } catch (err) {
            console.log(err);
            return {
                movies: [],
                total: 0,
            };
        }
    }
}
