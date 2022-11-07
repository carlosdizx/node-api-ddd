import { Entity, Column, ObjectIdColumn, OneToMany } from "typeorm";
import { PersonData } from "../person/PersonData";
@Entity({ name: "users" })
export class UserData {
  @ObjectIdColumn()
  id: number;

  @Column()
  uuid: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  description: string;
  @OneToMany(() => PersonData, (person) => person.user)
  person: PersonData;
}
