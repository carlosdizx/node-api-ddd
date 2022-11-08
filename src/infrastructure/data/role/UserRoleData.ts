import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { RoleData } from "./RoleData";
import { UserData } from "../user/UserData";

@Entity({ name: "role_user" })
export class UserRoleData {
  @ManyToOne(() => RoleData, (role) => role.userRole)
  @JoinColumn()
  role: RoleData;
  @ManyToOne(() => UserData, (user) => user.userRole)
  @JoinColumn()
  user: UserData;
}
