import {v4 as uuid} from "uuid";

export class User {
    uuid: string;
    name: string;
    email: string;
    password: string;
    description: string;

    constructor(name: string, email: string, password: string, description?: string) {
        this.uuid = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        this.description = description ?? "default";
    }
}
