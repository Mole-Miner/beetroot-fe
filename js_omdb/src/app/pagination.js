const paginationSection = document.querySelector('section.pagination');
const previousBtn = document.querySelector('button.pagination__previous');
const nextBtn = document.querySelector('button.pagination__next');
const currentPageSpan = document.querySelector('span.pagination__current');

const pagination = {
    firstPage: 0,
    lastPage: 0,
    currentPage: 0,
    setPagination(total, page) {
        this.firstPage = 1;
        this.currentPage = 1;
        this.lastPage = Math.ceil(total / page);
    },
    previousPage() {
        if (this.currentPage === this.firstPage) {
            return;
        }
        return --this.currentPage;
    },
    nextPage() {
      if (this.currentPage === this.lastPage) {
          return;
      }
      return ++this.currentPage;
    }
}

function showPagination() {
    paginationSection.style.display = 'flex';
}

function hidePagination() {
    paginationSection.style.display = 'none';
}

function renderCurrentPage() {
    currentPageSpan.textContent = `${pagination.currentPage} | ${pagination.lastPage}`;
}

document.addEventListener('omdb-movies', (e) => {
    const total = e.detail.total;
    const page = e.detail.page;
    if (total === 0 && page === 0) {
        return hidePagination();
    }
    pagination.setPagination(total, page);
    showPagination();
    renderCurrentPage();
});

previousBtn.addEventListener('click', () => {
    const previousPage = pagination.previousPage();
    if (!previousPage) {
        return;
    }
    const paginationEvent = new CustomEvent('omdb-pagination', {detail: previousPage});
    document.dispatchEvent(paginationEvent);
    renderCurrentPage();
});

nextBtn.addEventListener('click', () => {
    const nextPage = pagination.nextPage();
    if (!nextPage) {
        return;
    }
    const paginationEvent = new CustomEvent('omdb-pagination', {detail: nextPage});
    document.dispatchEvent(paginationEvent);
    renderCurrentPage();
});
