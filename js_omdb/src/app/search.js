import { dispatchSearchEvent } from "@js/dispatch";

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
    dispatchSearchEvent(searchOptions);
    searchForm.reset();
});
