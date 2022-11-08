import { UserRole } from "./UserRole";

export interface UserRoleRepository {
  save(userRole: UserRole): Promise<UserRole>;
}
