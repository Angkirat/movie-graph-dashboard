export class Actor {
    id!: string;
    name!: string;
    image!: string;
    birthday!: string;
    gender!: string;
    deathday!: string;

    constructor(id: string, name: string, birthday: string, image: string, gender: string, deathday: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.birthday = birthday;
        this.gender = gender;
        this.deathday = deathday;
    }
}
