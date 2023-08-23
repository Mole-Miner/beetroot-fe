const paginationSection = document.querySelector('section.pagination');
const previousBtn = document.querySelector('button.pagination__previous');
const nextBtn = document.querySelector('button.pagination__next');
const currentPageSpan = document.querySelector('span.pagination__current');

const paginationOptions = {
    firstPage: 0,
    lastPage: 0,
    currenPage: 0,
}

document.addEventListener('omdb-movies', (e) => {
    const moviesData = e.detail;
    console.log(moviesData);
});
