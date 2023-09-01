import { News } from './news';

/*
Create a class that describes a newsfeed. The class should contain:
    an array of the news;
a getter for returning the number of the news;
a method for displaying all the news;
*/

class Newsfeed {
    newsList = [];

    get totalNews() {
        return this.newsList.length;
    }

    constructor(news) {
        this.newsList = news;
    }

    displayNews(element) {
        for (const news of this.newsList) {
           const p = document.createElement('p');
           p.textContent = news.info();
           element.appendChild(p);
        }
    }
}

const newsfeed = new Newsfeed([
    new News("heading 1", 'some text', ['sport', 'business'], new Date(2023, 8, 21)),
    new News("heading 2", 'some text', ['sport', 'business'], new Date(2023, 8, 29)),
    new News("heading 3", 'some text', ['sport', 'business'], new Date(2023, 8, 26))
]);
const output = document.querySelector('#newsfeed');
// newsfeed.displayNews(output);
