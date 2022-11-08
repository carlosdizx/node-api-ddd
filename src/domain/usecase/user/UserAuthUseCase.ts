import { UserAuthRepository } from "../../models/user/UserAuthRepository";
import { User } from "../../models/user/User";
import bcrypt from "bcryptjs";
import { UserRoleRepository } from "../../models/role/UserRoleRepository";
import { UserRole } from "../../models/role/UserRole";
import { RoleRepository } from "../../models/role/RoleRepository";
import { Role } from "../../models/role/Role";

export class UserAuthUseCase {
  constructor(
    private readonly repository: UserAuthRepository,
    private readonly twoRepository: RoleRepository,
    private readonly threeRepository: UserRoleRepository
  ) {}

  public registerUser = async ({ email, password, description, roles }) => {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);
    const user = new User(email, pass, description);
    const userSaved = await this.repository.register(user);
    for (const roleId of roles) {
      const role: Role = await this.twoRepository.findById(roleId);
      const userRole: UserRole = new UserRole(role, userSaved);
      await this.threeRepository.save(userRole);
    }
    return await this.repository.register(user);
  };
}
