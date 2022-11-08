import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";
import { RoleRepository } from "../../../domain/models/role/RoleRepository";

export class RoleDataAdapter
  extends PostgresSQLRepository
  implements RoleRepository
{
  findAll(): Promise<any[]> {
    return this.list();
  }
}
