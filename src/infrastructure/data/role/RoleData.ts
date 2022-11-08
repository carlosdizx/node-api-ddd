import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "roles" })
export class RoleData {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;
  @Column()
  name: string;
  @Column()
  description: string;
}
