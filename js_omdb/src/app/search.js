const searchForm = document.querySelector('form.search');

searchForm.addEventListener('submit', (e) => {
   e.preventDefault();
    const formData = Object.fromEntries(new FormData(searchForm));
    if (!formData.search || !formData.type) {
        return;
    }
    const searchOptions = {
        ...formData,
        page: 1,
    };
    const searchEvent = new CustomEvent('omdb-search', {detail: searchOptions});
    document.dispatchEvent(searchEvent);
    searchForm.reset();
});
