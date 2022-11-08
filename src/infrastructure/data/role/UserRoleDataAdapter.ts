import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";
import { UserRoleRepository } from "../../../domain/models/role/UserRoleRepository";

export class UserRoleDataAdapter
  extends PostgresSQLRepository
  implements UserRoleRepository {}
