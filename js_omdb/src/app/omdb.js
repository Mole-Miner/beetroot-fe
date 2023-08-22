import { getMovies } from '@js/API';

async function renderMovies({movies, total}) {
    const moviesSection = document.querySelector('main > section.movies');

    if (movies.length === 0) {
        moviesSection.textContent = 'Movie not found';
        return;
    }

    movies.forEach(({Title}) => {
        const movieSection = document.createElement('section');
        movieSection.textContent = Title;
        moviesSection.appendChild(movieSection);
    });
}

async function bootstrap() {
    const form = document.querySelector('form.search');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(form));
        if (!formData.search || !formData.type) {
            return;
        }
        const data = await getMovies(formData);
        await renderMovies(data);
        form.reset();
    });
}

bootstrap()
    .catch((err) => console.log('OMDB failed', err));
