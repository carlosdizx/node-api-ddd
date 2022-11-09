import { UserRoleRepository } from "../../models/role/UserRoleRepository";
import { UserRole } from "../../models/role/UserRole";

export class UserRoleUseCase {
  constructor(private readonly repository: UserRoleRepository) {}

  public createUserRole = ({ role, user }) => {
    const userRole: UserRole = new UserRole(role, user);
    return this.repository.save(userRole);
  };
}
