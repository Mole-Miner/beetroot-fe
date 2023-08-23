import { getMovieById } from "@js/API";

const detailsSection = document.querySelector('section.details');

function clearDetailsSection() {
    if (detailsSection.children.length > 0) {
        Array.from(detailsSection.children).forEach((child) => child.remove());
    }
}

function renderDetailsSection({Actors, Director, Genre}) {
    clearDetailsSection();
    const detailsActors = document.createElement('p');
    detailsActors.textContent = `Actors: ${Actors}`;
    const detailsDirector = document.createElement('p');
    detailsDirector.textContent = `Director: ${Director}`;
    const detailsGenre = document.createElement('p');
    detailsGenre.textContent = `Genre: ${Genre}`;
    detailsSection.append(detailsActors, detailsDirector, detailsGenre);
}

document.addEventListener('omdb-details', async (e) => {
    const searchOptions = e.detail;
    const movieData = await getMovieById(searchOptions);
    renderDetailsSection(movieData);
});

document.addEventListener('omdb-search', () => {
   clearDetailsSection();
});

document.addEventListener('omdb-pagination', () => {
   clearDetailsSection();
});
