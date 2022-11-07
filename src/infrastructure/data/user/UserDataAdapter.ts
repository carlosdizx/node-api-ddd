import { UserRepository } from "../../../domain/models/user/UserRepository";
import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";

export class UserDataAdapter
  extends PostgresSQLRepository
  implements UserRepository
{
  constructor(entity: any) {
    super(entity);
  }

  findByUuid(uuid: string): Promise<any> {
    return super.findById(uuid);
  }
}
