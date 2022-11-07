import {Entity, Column, ObjectIdColumn} from "typeorm";
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
}
