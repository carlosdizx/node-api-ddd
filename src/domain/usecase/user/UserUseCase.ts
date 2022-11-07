import { UserAuthRepository } from "../../models/user/UserRepository";

export class UserUseCase {
  constructor(private readonly repository: UserAuthRepository) {}

  public findUserByUuid = async (uuid: string) => {
    return await this.repository.findByUuid(uuid);
  };
}
