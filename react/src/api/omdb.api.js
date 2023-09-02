async function createRequest(params) {
    const searchParams = new URLSearchParams({
        ...params,
        apikey: '6fcb550a',
    }).toString();
    const url = new URL(`http://www.omdbapi.com/?${searchParams}`);
    const response = await fetch(url);
    return await response.json();
}

export async function getMovies({search, type, page}) {
    try {
        const {Search, totalResults} = await createRequest({
            s: search,
            type,
            page
        });
        return {
            movies: Search ?? [],
            page: Search.length ?? 0,
            total: Number(totalResults) ?? 0,
        }
    } catch (err) {
        console.log(err);
        return {
            movies: [],
            page: 0,
            total: 0,
        };
    }
}
