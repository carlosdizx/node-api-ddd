import { UserRepository } from "../../models/user/UserRepository";

export class UserUseCase {
  constructor(private readonly repository: UserRepository) {}

  public findUserByUuid = async (uuid: string) => {
    return await this.repository.findByUuid(uuid);
  };
}
