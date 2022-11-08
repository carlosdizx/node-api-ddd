import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { RoleData } from "./RoleData";
import { UserData } from "../user/UserData";

@Entity({ name: "users_roles" })
export class UserRoleData {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;
  @ManyToOne(() => RoleData, (role) => role.userRole)
  @JoinColumn({name:"role_id"})
  role: RoleData;
  @ManyToOne(() => UserData, (user) => user.userRole)
  @JoinColumn({name:"user_id"})
  user: UserData;
}
