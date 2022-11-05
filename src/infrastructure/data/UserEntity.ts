import {Entity, Column, ObjectIdColumn} from "typeorm";
@Entity({ name: "users" })
export class UserEntity {
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
