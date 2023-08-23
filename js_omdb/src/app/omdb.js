import { moviesService } from '@js/API';

const movieComponent = {
    async render({Title, Year, Poster}) {
        const movieSection = document.createElement('section');
        movieSection.className = 'movie'
        const moviePoster = document.createElement('img');
        moviePoster.src = Poster;
        const movieTitle = document.createElement('h1');
        movieTitle.textContent = Title;
        const movieYear = document.createElement('span');
        movieYear.textContent = Year;
        movieSection.append(moviePoster, movieTitle, movieYear);
        return movieSection;
    }
};

const moviesComponent = {
    section: document.querySelector('section.movies'),
    async render(movies) {
        if (this.section.children.length > 0) {
            Array.from(this.section.children).forEach((movieSection) => movieSection.remove());
        }
        if (movies.length === 0) {
            this.section.textContent = 'Movie not found';
            return;
        }
        for (const movie of movies) {
            const component = await movieComponent.render(movie);
            this.section.appendChild(component);
        }
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
            const moviesData = await moviesService.getMovies(this.searchOptions);
            paginationComponent.init({total: moviesData.total, page: moviesData.movies.length});
            await Promise.all([
                moviesComponent.render(moviesData.movies),
                paginationComponent.render(),
            ]);
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
    async onPrevious() {
        if (this.currentPage === this.firstPage) {
            return;
        }
        searchComponent.patchSearchOptions({
            page: --this.currentPage
        });
        const moviesData = await moviesService.getMovies(searchComponent.searchOptions);
        await Promise.all([
            moviesComponent.render(moviesData.movies),
            this.render(),
        ]);
    },
    async onNext() {
        if (this.currentPage === this.lastPage) {
            return;
        }
        searchComponent.patchSearchOptions({
            page: ++this.currentPage
        });
        const moviesData = await moviesService.getMovies(searchComponent.searchOptions);
        await Promise.all([
            moviesComponent.render(moviesData.movies),
            this.render(),
        ]);
    },
    init({total, page}) {
        this.firstPage = 1;
        this.currentPage = 1;
        this.lastPage = Math.ceil(total / page);
        this.previousBtn.addEventListener('click', async () => {
            await this.onPrevious();
        });
        this.nextBtn.addEventListener('click', async () => {
            await this.onNext();
        });
    },
    async render() {
        this.currentSpan.textContent = this.currentPage.toString();
        this.section.style.display = 'flex';
    }
};

searchComponent.onSearch();
