import { getMovieById } from "@js/API";
import { OMDB_EVENT } from "@js/dispatch";

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

document.addEventListener(OMDB_EVENT.DETAILS, async (e) => {
    const searchOptions = e.detail;
    const movieData = await getMovieById(searchOptions);
    renderDetailsSection(movieData);
});

document.addEventListener(OMDB_EVENT.SEARCH, () => {
    clearDetailsSection();
});

document.addEventListener('omdb-pagination', () => {
    clearDetailsSection();
});
