import { UserAuthRepository } from "../../../domain/models/user/UserAuthRepository";
import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";
export class UserDataAuthAdapter
  extends PostgresSQLRepository
  implements UserAuthRepository
{
  constructor(entity: any) {
    super(entity);
  }

  register(user: any): Promise<any> {
    return super.save(user);
  }
}
