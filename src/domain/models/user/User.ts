import {v4 as uuid} from "uuid";

export class User {
    private readonly uuid: string;
    private readonly name: string;
    private readonly email: string;
    private readonly password: string;
    private readonly description: string;

    constructor(name: string, email: string, password: string, description?: string) {
        this.uuid = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        this.description = description ?? "default";
    }
}
