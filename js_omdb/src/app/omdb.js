import { getMovieById, getMovies } from '@js/API';

const detailsComponent = {
    section: document.querySelector('section.details'),
    clear() {
        if (this.section.children.length > 0) {
            Array.from(this.section.children).forEach((child) => child.remove());
        }
    },
    render({Actors, Director, Genre}) {
        this.clear();
        const detailsActors = document.createElement('p');
        detailsActors.textContent = `Actors: ${Actors}`;
        const detailsDirector = document.createElement('p');
        detailsDirector.textContent = `Director: ${Director}`;
        const detailsGenre = document.createElement('p');
        detailsGenre.textContent = `Genre: ${Genre}`;
        this.section.append(detailsActors, detailsDirector, detailsGenre);
    },
};

const movieComponent = {
    render({Title, Year, Poster, imdbID}) {
        const movieSection = document.createElement('section');
        movieSection.className = 'movie'
        const moviePoster = document.createElement('img');
        moviePoster.src = Poster;
        const movieTitle = document.createElement('h1');
        movieTitle.textContent = Title;
        const movieYear = document.createElement('span');
        movieYear.textContent = Year;
        const movieLearnMore = document.createElement('button');
        movieLearnMore.textContent = 'Details';
        movieLearnMore.addEventListener('click', async () => {
            const movieData = await getMovieById(imdbID);
            detailsComponent.render(movieData);
        });
        movieSection.append(moviePoster, movieTitle, movieYear, movieLearnMore);
        return movieSection;
    }
};

const moviesComponent = {
    section: document.querySelector('section.movies'),
    clear() {
        if (this.section.children.length > 0) {
            Array.from(this.section.children).forEach((child) => child.remove());
        }
    },
    render(movies) {
        this.clear();
        if (movies.length === 0) {
            this.section.textContent = 'Movie not found';
            detailsComponent.clear();
            paginationComponent.hide();
            return;
        }
        for (const movie of movies) {
            const component = movieComponent.render(movie);
            this.section.appendChild(component);
        }
        paginationComponent.render();
    }
};

const searchComponent = {
    form: document.querySelector('form.search'),
    searchOptions: {},
    patchSearchOptions(options) {
        this.searchOptions = {...this.searchOptions, ...options};
    },
    onSearch() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(this.form));
            if (!formData.search || !formData.type) {
                return;
            }
            this.patchSearchOptions({
                ...formData,
                page: 1,
            })
            const moviesData = await getMovies(this.searchOptions);
            paginationComponent.setPages({total: moviesData.total, page: moviesData.movies.length});
            moviesComponent.render(moviesData.movies);
            this.form.reset();
        });
    }
};

const paginationComponent = {
    section: document.querySelector('section.pagination'),
    previousBtn: document.querySelector('button.pagination__previous'),
    nextBtn: document.querySelector('button.pagination__next'),
    currentSpan: document.querySelector('span.pagination__current'),
    firstPage: 0,
    lastPage: 0,
    currentPage: 0,
    show() {
        this.section.style.display = 'flex';
    },
    hide() {
        this.section.style.display = 'none';
    },
    async onPrevious() {
        if (this.currentPage === this.firstPage) {
            return;
        }
        searchComponent.patchSearchOptions({
            page: --this.currentPage
        });
        const moviesData = await getMovies(searchComponent.searchOptions);
        moviesComponent.render(moviesData.movies);
        detailsComponent.clear();
        this.render();
    },
    async onNext() {
        if (this.currentPage === this.lastPage) {
            return;
        }
        searchComponent.patchSearchOptions({
            page: ++this.currentPage
        });
        const moviesData = await getMovies(searchComponent.searchOptions);
        moviesComponent.render(moviesData.movies);
        detailsComponent.clear();
        this.render();
    },
    setPages({total, page}) {
        this.firstPage = 1;
        this.currentPage = 1;
        this.lastPage = Math.ceil(total / page);
    },
    onPagination() {
        this.previousBtn.addEventListener('click', async () => {
            await this.onPrevious();
        });
        this.nextBtn.addEventListener('click', async () => {
            await this.onNext();
        });
    },
    render() {
        this.currentSpan.textContent = this.currentPage.toString();
        this.show();
    }
};

searchComponent.onSearch();
paginationComponent.onPagination();
