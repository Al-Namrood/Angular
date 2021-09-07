import { PoniesComponent } from "src/app/pages/ponies/ponies.component";
import { Pony } from "../pony/pony";

export class Race {
    id_race: number;
    location: string;
    date: Date;
    ponies: Pony[]

    constructor(id_race?: number, location?: string, date?: Date, ponies?: Pony[]){
        this.id_race = id_race === undefined ? 0 : id_race;
        this.location = location === undefined ? "location": location;
        this.date = date === undefined ? new Date(): date;
        this.ponies = []


    }
}
