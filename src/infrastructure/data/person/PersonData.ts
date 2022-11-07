import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { TypesDocument } from "../../../domain/models/common/TypesDocument";
import { UserData } from "../user/UserData";

@Entity({ name: "persons" })
export class PersonData {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;
  @Column({ name: "first_name" })
  firstName: string;
  @Column({ name: "last_name" })
  lastName: string;
  @Column({
    type: "enum",
    enum: TypesDocument,
    default: TypesDocument.CitizenshipCard,
    name: "type_document",
  })
  typeDocument: TypesDocument;
  @Column()
  document: string;
  @Column({ name: "date_of_birth" })
  dateOfBirth: Date;
  @ManyToOne(() => UserData, (user) => user.person)
  @JoinColumn({ name: "user_id" })
  user: UserData;
}
