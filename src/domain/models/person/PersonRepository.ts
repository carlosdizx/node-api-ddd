import { Person } from "./Person";
export interface PersonRepository {
  create(person: Person): Promise<Person>;
  findAll(): Promise<Person[]>;
}
