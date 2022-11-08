import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserRoleData} from "./UserRoleData";

@Entity({ name: "roles" })
export class RoleData {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @OneToMany(() => UserRoleData, (userRole) => userRole.role)
  userRole: UserRoleData[];
}
