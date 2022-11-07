import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from "typeorm";
import { PersonData } from "../person/PersonData";
@Entity({ name: "users" })
export class UserData {
  @BeforeInsert()
  @PrimaryGeneratedColumn("uuid")
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
