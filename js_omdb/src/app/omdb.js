// import { getMovieById, getMovies } from '@js/API';
//
// const paginationComponent = {
//     section: document.querySelector('section.pagination'),
//     previousBtn: document.querySelector('button.pagination__previous'),
//     nextBtn: document.querySelector('button.pagination__next'),
//     currentSpan: document.querySelector('span.pagination__current'),
//     firstPage: 0,
//     lastPage: 0,
//     currentPage: 0,
//     show() {
//         this.section.style.display = 'flex';
//     },
//     hide() {
//         this.section.style.display = 'none';
//     },
//     async onPrevious() {
//         if (this.currentPage === this.firstPage) {
//             return;
//         }
//         searchComponent.patchSearchOptions({
//             page: --this.currentPage
//         });
//         const moviesData = await getMovies(searchComponent.searchOptions);
//         moviesComponent.render(moviesData.movies);
//         detailsComponent.clear();
//         this.render();
//     },
//     async onNext() {
//         if (this.currentPage === this.lastPage) {
//             return;
//         }
//         searchComponent.patchSearchOptions({
//             page: ++this.currentPage
//         });
//         const moviesData = await getMovies(searchComponent.searchOptions);
//         moviesComponent.render(moviesData.movies);
//         detailsComponent.clear();
//         this.render();
//     },
//     setPages({total, page}) {
//         this.firstPage = 1;
//         this.currentPage = 1;
//         this.lastPage = Math.ceil(total / page);
//     },
//     onPagination() {
//         this.previousBtn.addEventListener('click', async () => {
//             await this.onPrevious();
//         });
//         this.nextBtn.addEventListener('click', async () => {
//             await this.onNext();
//         });
//     },
//     render() {
//         this.currentSpan.textContent = this.currentPage.toString();
//         this.show();
//     }
// };
//
// searchComponent.onSearch();
// paginationComponent.onPagination();
