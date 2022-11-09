import { Role } from "./Role";

export interface RoleRepository {
  save(role: Role): Promise<Role>;
  findAll(): Promise<Role[]>;
  findById(uuid: string): Promise<Role>;
}
