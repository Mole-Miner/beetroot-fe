// Create a class that describes a piece of news (heading, text, tag array, date of publication). You need to execute one print method in the class, that puts out all the info via document.write()
// If the publication date was less than a day ago, it is displayed as «today»; if less than a week ago — «N days ago», and otherwise it is shown as the full date format dd:mm:yyyy.

export class News {
    heading;
    text;
    tag;
    publication;

    get publicationDate() {
        const today = new Date().getDate();
        const publicDate = this.publication.getDate();
        let formatPublication;
        if (today === publicDate) {
            formatPublication = 'today';
        } else if (today - publicDate <= 7) {
            formatPublication = today - publicDate + ' days ago';
        } else {
            formatPublication = `${publicDate}:${this.publication.getMonth()}:${this.publication.getFullYear()}`;
        }
        return formatPublication;
    }

    constructor(heading, text, tag, publication) {
        this.heading = heading;
        this.text = text;
        this.tag = tag;
        this.publication = publication;
    }

    info() {
        const tags = this.tag.join(', ');
        return `${this.heading}\n ${this.text}\n ${tags}\n ${this.publicationDate}\n`;
    }
}

const news1 = new News("headling 1", 'some text', ['sport', 'business'], new Date(2023, 8, 21));
// console.log(news1.info());
