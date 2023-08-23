const searchForm = document.querySelector('form.search');

const searchOptions = {
    options: {},
    patch(options) {
        this.options = {...this.options, ...options};
    },
}

searchForm.addEventListener('submit', (e) => {
   e.preventDefault();
    const formData = Object.fromEntries(new FormData(searchForm));
    if (!formData.search || !formData.type) {
        return;
    }
    searchOptions.patch({
        ...formData,
        page: 1,
    });
    document.dispatchEvent(new CustomEvent('omdb-search', { detail: searchOptions.options }));
});
