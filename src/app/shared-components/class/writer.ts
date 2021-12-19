export class Writer {
    id !: string;
    name !: string;
    gender !: string;
    birthday !: string;
    photoUrl !: string;

    constructor(id: string, name: string, gender: string, birthday: string, photoUrl: string) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.photoUrl = photoUrl;
    }
}
