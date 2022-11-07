import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonData } from "../person/PersonData";
@Entity({ name: "users" })
export class UserData {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  description: string;
  @OneToMany(() => PersonData, (person) => person.user)
  person: PersonData;
}
