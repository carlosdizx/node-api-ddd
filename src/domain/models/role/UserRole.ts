import { Role } from "./Role";
import { User } from "../user/User";

export class UserRole {
  private readonly role: Role;
  private readonly user: User;

  constructor(role: Role, user: User) {
    this.role = role;
    this.user = user;
  }
}
