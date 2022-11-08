import { RoleRepository } from "../../models/role/RoleRepository";
import { Role } from "../../models/role/Role";

export class RoleUseCase {
  constructor(private readonly repository: RoleRepository) {}

  public createRole = async ({ name, description }) => {
    const role: Role = new Role(name, description);
    return this.repository.save(role);
  };

  public listAllRoles = async () => this.repository.findAll();
}
