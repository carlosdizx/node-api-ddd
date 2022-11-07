import { Entity, Column, ObjectIdColumn, ManyToOne } from "typeorm";
import { TypesDocument } from "../../../domain/models/common/TypesDocument";
import { JoinColumn } from "typeorm/browser";
import { UserData } from "../user/UserData";

@Entity({ name: "users" })
export class PersonData {
  @ObjectIdColumn()
  id: number;

  @Column()
  uuid: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({
    type: "enum",
  })
  typeDocument: TypesDocument;
  @Column()
  document: string;
  @Column()
  dateOfBirth: Date;
  @ManyToOne(() => UserData, (user) => user.person)
  @JoinColumn()
  user: UserData;
}
