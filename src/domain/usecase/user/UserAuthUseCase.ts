import { UserAuthRepository } from "../../models/user/UserAuthRepository";
import { User } from "../../models/user/User";
import bcrypt from "bcryptjs";
import { UserRoleRepository } from "../../models/role/UserRoleRepository";
import { UserRole } from "../../models/role/UserRole";
import { RoleRepository } from "../../models/role/RoleRepository";
import { Role } from "../../models/role/Role";
import { generatePassword } from "../../models/common/Util";
import sendMail from "../../../infrastructure/email/nodemailer/Emailer";

export class UserAuthUseCase {
  constructor(
    private readonly repository: UserAuthRepository,
    private readonly twoRepository: RoleRepository,
    private readonly threeRepository: UserRoleRepository
  ) {}

  public registerUser = async ({ email, description, roles }) => {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(generatePassword(10), salt);
    const user = new User(email, pass, description);
    const userSaved = await this.repository.register(user);
    for (const roleId of roles) {
      const role: Role = await this.twoRepository.findById(roleId);
      const userRole: UserRole = new UserRole(role, userSaved);
      await this.threeRepository.save(userRole);
    }
    await sendMail();
    return await this.repository.register(user);
  };
}
