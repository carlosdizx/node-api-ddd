import { Role } from "../common/Role";

export class User {
  private readonly email: string;
  private readonly password: string;
  private readonly description: string;
  private readonly roles: Role[];
  private readonly status: boolean;

  constructor(
    email: string,
    password: string,
    roles: Role[],
    description?: string
  ) {
    this.email = email;
    this.password = password;
    this.roles = roles;
    this.description = description ?? "default";
    this.status = true;
  }
}
