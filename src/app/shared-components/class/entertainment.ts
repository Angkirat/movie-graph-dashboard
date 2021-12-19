export class Entertainment {
    id !: string;
    entertainmentType !: string;
    releaseDate !: string;
    title !: string;
    genre !: string;
    director !: string;
    writer !: string;
    photoUrl !: string;

    constructor(id: string, entertainmentType: string, releaseDate: string, title: string, genre: string, director: string, writer: string, photoUrl: string) {
        this.id = id;
        this.entertainmentType = entertainmentType;
        this.releaseDate = releaseDate;
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.writer = writer;
        this.photoUrl = photoUrl;
    }
}
